/**
 * ui/design-system/primitives/FileUpload.tsx
 *
 * WHAT: Generic drag-and-drop file upload with preview.
 *       The old project had PhotoUpload & NationalityDocumentUpload as two separate
 *       components that shared 95% of the same code. This is the single source of truth.
 *
 * HOW TO USE:
 *
 *   import { FileUpload } from '@/ui/design-system/primitives/FileUpload'
 *   import { ImageIcon } from 'lucide-react'
 *
 *   // Basic usage
 *   <FileUpload
 *     file={file}
 *     onChange={setFile}
 *     icon={ImageIcon}
 *     title="រូបថត"
 *   />
 *
 *   // With resize transform (e.g. 4x6 photo)
 *   <FileUpload
 *     file={file}
 *     onChange={setFile}
 *     icon={ImageIcon}
 *     title="រូបថត (4×6)"
 *     hint="JPEG/PNG • auto-resize"
 *     buttonLabel="ជ្រើសរើសរូបថត"
 *     transform={resizeTo4x6}
 *     previewWidth={413}
 *     previewHeight={531}
 *   />
 *
 *   // See Uploads.tsx for ready-made PhotoUpload & NationalityDocumentUpload wrappers
 */

'use client';

import { useId, useRef, useMemo, useEffect, useState } from 'react';
import Image from 'next/image';
import { UploadCloud, CheckCircle2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { Button } from '@/ui/design-system/primitives/Button';

function fmtBytes(b: number) {
  if (!b) return '0 B';
  const u = ['B', 'KB', 'MB'];
  const p = Math.min(Math.floor(Math.log(b) / Math.log(1024)), 2);
  return `${(b / 1024 ** p).toFixed(p ? 1 : 0)} ${u[p]}`;
}

export interface FileUploadProps {
  file: File | null;
  onChange: (file: File | null) => void;
  icon: LucideIcon;
  title: string;
  hint?: string;
  buttonLabel?: string;
  prompt?: string;
  accept?: string;
  /** Optional async transform applied before storing (e.g. resize) */
  transform?: (file: File) => Promise<File>;
  previewWidth?: number;
  previewHeight?: number;
  className?: string;
}

export function FileUpload({
  file, onChange,
  icon: Icon, title, hint,
  buttonLabel = 'ជ្រើសរើសឯកសារ',
  prompt = 'ចុចឬអូសឯកសារមកទីនេះ',
  accept = 'image/*',
  transform,
  previewWidth = 800,
  previewHeight = 600,
  className,
}: FileUploadProps) {
  const id = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const preview = useMemo(() => (file ? URL.createObjectURL(file) : null), [file]);
  useEffect(() => () => { if (preview) URL.revokeObjectURL(preview); }, [preview]);

  const handleFile = async (f: File) => {
    try { onChange(transform ? await transform(f) : f); }
    catch { onChange(f); }
  };

  return (
    <section className={cn('w-full rounded-xl border border-slate-200 bg-white shadow-sm', className)}>
      {/* Header */}
      <div className="flex items-center gap-2 border-b border-slate-100 px-4 py-3">
        <Icon className="h-5 w-5 text-indigo-600" />
        <div>
          <h3 className="text-sm font-semibold text-slate-800">{title}</h3>
          {hint && <p className="text-xs text-slate-500">{hint}</p>}
        </div>
      </div>

      {/* Body */}
      <div className="px-4 py-4">
        {!file ? (
          <label
            htmlFor={`fu-${id}`}
            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={(e) => {
              e.preventDefault(); setIsDragging(false);
              const f = e.dataTransfer?.files?.[0];
              if (f) handleFile(f);
            }}
            className={cn(
              'flex cursor-pointer flex-col items-center gap-3 rounded-lg border-2 border-dashed bg-slate-50 p-6 transition',
              'hover:border-indigo-300 hover:bg-indigo-50',
              isDragging && 'border-indigo-400 bg-indigo-50',
            )}
          >
            <input ref={inputRef} id={`fu-${id}`} type="file" accept={accept} className="sr-only"
              onChange={(e) => { const f = e.currentTarget.files?.[0]; if (f) handleFile(f); }} />
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-indigo-600 shadow ring-1 ring-slate-200">
              <UploadCloud className="h-5 w-5" />
            </div>
            <p className="text-center text-sm text-slate-600">{prompt}</p>
            <Button type="button" variant="outline" size="sm">{buttonLabel}</Button>
          </label>
        ) : (
          <button type="button" onClick={() => inputRef.current?.click()}
            className="group w-full rounded-lg border border-slate-200 bg-slate-50 p-3 text-left transition hover:border-indigo-200 hover:bg-indigo-50">
            <input ref={inputRef} type="file" accept={accept} className="sr-only"
              onChange={(e) => { const f = e.currentTarget.files?.[0]; if (f) handleFile(f); }} />
            <div className="relative overflow-hidden rounded-md border border-slate-200 bg-white">
              <Image src={preview!} alt={title}
                width={previewWidth} height={previewHeight}
                className="h-full w-full object-cover" unoptimized />
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center gap-2 bg-slate-900/20 opacity-0 transition group-hover:opacity-100">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                <span className="text-xs font-semibold text-white">ចុចដើម្បីប្តូរ</span>
              </div>
            </div>
            <div className="mt-2 flex items-center justify-between text-xs text-slate-600">
              <span className="truncate font-medium">{file.name}</span>
              <span className="ml-2 shrink-0">{fmtBytes(file.size)}</span>
            </div>
          </button>
        )}
      </div>
    </section>
  );
}
