/**
 * ui/features/registrations/components/shared/Uploads.tsx
 *
 * WHAT: Registration-specific file upload wrappers.
 *       Both are thin configs over the generic FileUpload primitive.
 *
 * HOW TO USE:
 *
 *   import { PhotoUpload, NationalityDocumentUpload } from './shared/Uploads'
 *
 *   <PhotoUpload
 *     file={formData.photoUpload}
 *     onChange={(f) => setFields({ photoUpload: f })}
 *   />
 *
 *   <NationalityDocumentUpload
 *     file={formData.nationalityDocumentUpload}
 *     onChange={(f) => setFields({ nationalityDocumentUpload: f })}
 *   />
 *
 * Need a different upload? Use FileUpload directly from design-system/primitives/FileUpload.
 */

'use client';

import { ImageIcon, FileText } from 'lucide-react';
import { FileUpload } from '@/ui/components/layout/FileUpload';

const PHOTO_W = 413;
const PHOTO_H = 531;

async function resizeTo4x6(file: File): Promise<File> {
  const bitmap = await createImageBitmap(file);
  const canvas = document.createElement('canvas');
  canvas.width = PHOTO_W;
  canvas.height = PHOTO_H;
  const ctx = canvas.getContext('2d')!;
  const scale = Math.max(PHOTO_W / bitmap.width, PHOTO_H / bitmap.height);
  const dw = bitmap.width * scale;
  const dh = bitmap.height * scale;
  ctx.drawImage(bitmap, (PHOTO_W - dw) / 2, (PHOTO_H - dh) / 2, dw, dh);
  const blob = await new Promise<Blob | null>((res) => canvas.toBlob(res, 'image/jpeg', 0.92));
  if (!blob) throw new Error('resize failed');
  return new File([blob], `${Date.now()}-photo.jpg`, { type: 'image/jpeg' });
}

export function PhotoUpload({
  file, onChange,
}: {
  file: File | null;
  onChange: (f: File | null) => void;
}) {
  return (
    <FileUpload
      file={file}
      onChange={onChange}
      icon={ImageIcon}
      title="រូបថត (4×6)"
      hint="JPEG/PNG • auto-resize • max 5MB"
      buttonLabel="ជ្រើសរើសរូបថត"
      prompt="ចុចឬអូសរូបថតមកទីនេះ"
      transform={resizeTo4x6}
      previewWidth={PHOTO_W}
      previewHeight={PHOTO_H}
    />
  );
}

export function NationalityDocumentUpload({
  file, onChange,
}: {
  file: File | null;
  onChange: (f: File | null) => void;
}) {
  return (
    <FileUpload
      file={file}
      onChange={onChange}
      icon={FileText}
      title="ឯកសារជាតិសញ្ជាតិ"
      hint="សំបុត្រកំណើត / អត្តសញ្ញាណ • max 5MB"
      buttonLabel="ជ្រើសរើសឯកសារ"
      prompt="ចុចឬអូសឯកសារមកទីនេះ"
      previewWidth={800}
      previewHeight={600}
    />
  );
}
