'use client';

/**
 * Confirmationstep.tsx
 *
 * Fixes applied:
 *  1. Reads ALL 5 photo/doc slots from IndexedDB (not just 2)
 *  2. Document "✓ បានបញ្ចូល" status reflects IndexedDB state, not lost React state
 *  3. Picks first available document from all checked doc slots for upload
 *  4. Submit button disabled until IndexedDB slots finish loading
 */

import { useState, useEffect } from 'react';
import { CheckCircle2, AlertCircle, Edit2, QrCode } from 'lucide-react';
import { Button } from '@/ui/design-system/primitives/Button';
import { SectionCard, StepHeader, InfoRow } from '@/ui/components/layout/LayoutPrimitives';
import { submitRegistrationAction } from '../../actions/submitRegistration';
import {
  GENDER_LABELS,
  ROLE_LABELS,
  ID_DOC_LABELS,
  buildFullNameKhmer,
  buildFullNameLatin,
} from '../../types/Registration.types';
import { PhotoStorage } from '@/ui/features/registrations/hooks/photoStorage';
import type { RegistrationFormData, LeaderRole } from '../../types/Registration.types';
import type { PhotoSlotKey } from '../../hooks/usePersonalInfoDraft';

// ─── Props ────────────────────────────────────────────────────

interface ConfirmationStepProps {
  formData: RegistrationFormData;
  onEdit: (step: number) => void;
  onSuccess: (enrollId: number) => void;
}

// ─── All photo slot keys — must match usePersonalInfoDraft ────

const PHOTO_SLOT_KEYS: PhotoSlotKey[] = [
  'photoUpload',
  'nationalityDocumentUpload',
  'docBirthCertificate',
  'docNationalId',
  'docPassport',
];

type PhotoSlots = Record<PhotoSlotKey, File | null>;

const EMPTY_SLOTS: PhotoSlots = {
  photoUpload: null,
  nationalityDocumentUpload: null,
  docBirthCertificate: null,
  docNationalId: null,
  docPassport: null,
};

// ─── Helpers ──────────────────────────────────────────────────

function getSessionKey(formData: RegistrationFormData): string {
  return `${formData.eventId || 'evt'}_${formData.organizationId || 'org'}`;
}

function resolveRoleLabel(formData: RegistrationFormData): string {
  if (formData.role === 'Athlete') return ROLE_LABELS.Athlete;
  if (formData.role === 'Leader' || formData.role === 'Technical') {
    return ROLE_LABELS[formData.leaderRole as LeaderRole] ?? formData.leaderRole;
  }
  return '—';
}

function getCategoryLetter(formData: RegistrationFormData): string {
  if (formData.categoryName) return formData.categoryName.charAt(0).toUpperCase();
  if (formData.athleteCategory === 'Male') return 'A';
  if (formData.athleteCategory === 'Female') return 'B';
  return 'A';
}

function displayNameKhmer(f: RegistrationFormData): string {
  const parts = [f.firstNameKhmer, f.lastNameKhmer].filter(Boolean);
  if (parts.length) return parts.join(' ');
  return f.fullNameKhmer || '—';
}

function displayNameLatin(f: RegistrationFormData): string {
  const parts = [f.firstNameLatin, f.lastNameLatin].filter(Boolean);
  if (parts.length) return parts.join(' ');
  return f.fullNameEnglish || '—';
}

// ─── ID Card Preview ──────────────────────────────────────────

function IDCardPreview({
  formData,
  photoUrl,
}: {
  formData: RegistrationFormData;
  photoUrl: string | null;
}) {
  const categoryLetter = getCategoryLetter(formData);
  const nameKh = displayNameKhmer(formData);
  const nameLatin = displayNameLatin(formData);
  const roleLabel = resolveRoleLabel(formData);

  return (
    <div
      className="mx-auto overflow-hidden rounded-2xl shadow-2xl select-none"
      style={{ width: 280, fontFamily: "'Khmer OS', 'Noto Sans Khmer', sans-serif" }}
    >
      <div
        className="flex flex-col items-center px-4 pt-3 pb-3 text-white"
        style={{ background: 'linear-gradient(135deg, #0066b3 0%, #0099dd 100%)' }}
      >
        <div className="mb-1 flex items-center gap-2">
          <span className="text-lg">🏅</span>
          <div className="text-center leading-tight">
            <p className="text-[8px] font-semibold tracking-wide opacity-90">គីឡាសរ្រម មាមទូ</p>
            <p className="text-[7px] font-bold tracking-widest uppercase">
              NATIONAL PRIMARY SCHOOL GAMES 2026
            </p>
          </div>
        </div>
        <p className="text-[8px] opacity-70">លេខ: _____ / ថ្ងៃ ___ / _____ / _______</p>
      </div>

      <div className="relative flex gap-3 bg-white px-4 py-3">
        <div className="shrink-0">
          <div
            className="overflow-hidden rounded border-2 border-slate-200 bg-slate-100"
            style={{ width: 64, height: 82 }}
          >
            {photoUrl ? (
              <img src={photoUrl} alt="Portrait" className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <svg viewBox="0 0 40 55" className="w-10 text-slate-300" fill="currentColor">
                  <circle cx="20" cy="16" r="10" />
                  <ellipse cx="20" cy="42" rx="16" ry="12" />
                </svg>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-between">
          <div>
            <p className="text-[12px] leading-tight font-bold text-slate-800">{nameKh}</p>
            <p className="text-[10px] leading-tight text-slate-500">{nameLatin}</p>
            <p className="mt-1 text-[9px] text-slate-600">{roleLabel}</p>
            <p className="text-[9px] text-slate-500">{formData.sportName || '—'}</p>
          </div>
          <div className="flex items-end gap-2">
            <span className="text-4xl leading-none font-extrabold" style={{ color: '#e63329' }}>
              {categoryLetter}
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white px-4 pb-2">
        <p className="text-[9px] leading-snug text-slate-600">{formData.organizationName || '—'}</p>
        <p className="text-[9px] text-slate-500">{formData.eventName || '—'}</p>
      </div>

      <div className="flex items-end justify-between bg-white px-4 pb-3">
        <div
          className="flex items-center justify-center rounded bg-slate-100 p-1"
          style={{ width: 44, height: 44 }}
        >
          <QrCode className="h-8 w-8 text-slate-400" />
        </div>
        <svg viewBox="0 0 80 30" className="w-16 opacity-15" fill="#0066b3">
          <circle cx="15" cy="15" r="12" fill="none" stroke="#0066b3" strokeWidth="3" />
          <circle cx="40" cy="15" r="12" fill="none" stroke="#0066b3" strokeWidth="3" />
          <circle cx="65" cy="15" r="12" fill="none" stroke="#0066b3" strokeWidth="3" />
        </svg>
      </div>

      <div
        className="flex items-center justify-center px-4 py-2"
        style={{ background: 'linear-gradient(135deg, #0066b3 0%, #0099dd 100%)' }}
      >
        <p className="text-[10px] font-bold tracking-wider text-white uppercase">
          កីឡាបឋមសិក្សាជាតិ
        </p>
      </div>

      <div className="items-around flex justify-around bg-slate-100 px-4 py-1.5">
        <span className="text-[8px] font-bold text-blue-700">V-ACTIVE</span>
        <span className="text-[8px] text-slate-500">SPORTS WATER</span>
        <span className="text-[8px] text-slate-500">🏔️ ម្ហូបស្រ្ហោង</span>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────

export function ConfirmationStep({ formData, onEdit, onSuccess }: ConfirmationStepProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // FIX: Load ALL 5 slots from IndexedDB — single source of truth for files
  const [slots, setSlots] = useState<PhotoSlots>(EMPTY_SLOTS);
  const [slotsLoaded, setSlotsLoaded] = useState(false);
  const [photoPreviewUrl, setPhotoPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    const sessionKey = getSessionKey(formData);
    let cancelled = false;
    let objectUrl: string | null = null;

    async function loadAll() {
      const result: PhotoSlots = { ...EMPTY_SLOTS };
      for (const key of PHOTO_SLOT_KEYS) {
        try {
          result[key] = await PhotoStorage.get(PhotoStorage.slotId(sessionKey, key));
        } catch {
          result[key] = null;
        }
      }
      if (cancelled) return;
      setSlots(result);
      setSlotsLoaded(true);
      if (result.photoUpload) {
        objectUrl = URL.createObjectURL(result.photoUpload);
        setPhotoPreviewUrl(objectUrl);
      }
    }

    loadAll();
    return () => {
      cancelled = true;
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /** Upload a single File to /api/upload; returns the public URL or null. */
  const uploadFileToServer = async (
    file: File | null,
    subfolder = 'registrations',
    customFilename?: string
  ): Promise<string | null> => {
    if (!file) return null;
    const body = new FormData();
    body.append('file', file);
    body.append('subfolder', subfolder);
    if (customFilename) body.append('filename', customFilename);
    const res = await fetch('/api/upload', { method: 'POST', body });
    if (!res.ok) {
      const msg = await res.json().catch(() => ({ error: 'Upload failed' }));
      throw new Error(msg.error ?? 'Upload failed');
    }
    const { url } = await res.json();
    return url as string;
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    try {
      const { photoUpload, nationalityDocumentUpload, ...payload } = formData;

      payload.fullNameKhmer = buildFullNameKhmer(payload.firstNameKhmer, payload.lastNameKhmer);
      payload.fullNameEnglish = buildFullNameLatin(payload.firstNameLatin, payload.lastNameLatin);

      // FIX: Use IndexedDB slots — React state File objects are lost between steps
      const photoFile = slots.photoUpload;

      // FIX: Pick first available doc across all checked slots, in priority order
      const docFile =
        slots.nationalityDocumentUpload ??
        slots.docBirthCertificate ??
        slots.docNationalId ??
        slots.docPassport ??
        null;

      const photoUuid = crypto.randomUUID();
      const [uploadedPhotoUrl, uploadedDocUrl] = await Promise.all([
        uploadFileToServer(photoFile, 'img', `${photoUuid}_pic.jpg`),
        uploadFileToServer(docFile, 'registrations/documents'),
      ]);

      const result = await submitRegistrationAction(payload, uploadedPhotoUrl, uploadedDocUrl);

      if (result.success && result.enrollId) {
        await PhotoStorage.clear();
        onSuccess(result.enrollId);
      } else {
        setError(result.error ?? 'ការដាក់ស្នើបរាជ័យ');
      }
    } catch (err) {
      console.error('[ConfirmationStep] handleSubmit error:', err);
      setError(err instanceof Error ? err.message : 'ការដាក់ស្នើបរាជ័យ');
    } finally {
      setLoading(false);
    }
  };

  const roleLabel = resolveRoleLabel(formData);

  // FIX: idDocType is never set in the form. Derive a readable label from
  // the checked doc keys stored in formData.nationality (comma-separated).
  const DOC_KEY_TO_KHMER: Record<string, string> = {
    docNationalId: 'យ្រើកអត្តសញ្ញាតប័ណ្ណ',
    docBirthCertificate: 'សំបុត្រგំណើត',
    docPassport: 'លិខិតឆ្លងត្ណើន',
    nationalityDocumentUpload: 'ឡកសារជាតិសញ្ញាតិ',
  };
  const selectedDocKeys = formData.nationality
    ? formData.nationality.split(',').filter(Boolean)
    : [];
  const idDocLabel =
    (formData.idDocType ? (ID_DOC_LABELS[formData.idDocType] ?? formData.idDocType) : null) ||
    selectedDocKeys
      .map((k) => DOC_KEY_TO_KHMER[k])
      .filter(Boolean)
      .join(', ') ||
    '—';

  // FIX: Status now reads from IndexedDB slots, not React state
  const hasDoc = (key: PhotoSlotKey): string => {
    if (!slotsLoaded) return '...';
    return slots[key] ? '✓ បានបញ្ចូល' : 'មិនទាន់';
  };

  const DOC_LABELS: Record<string, string> = {
    docBirthCertificate: 'សំបុត្រកំណើត',
    docNationalId: 'អត្តសញ្ញាណប័ណ្ណ',
    docPassport: 'លិខិតឆ្លងដែន',
    nationalityDocumentUpload: 'ឯកសារជាតិសញ្ជាតិ',
  };

  const DOC_KEYS: PhotoSlotKey[] = [
    'docBirthCertificate',
    'docNationalId',
    'docPassport',
    'nationalityDocumentUpload',
  ];

  return (
    <div className="mx-auto max-w-2xl space-y-5">
      <StepHeader title="បញ្ជាក់ការចុះឈ្មោះ" subtitle="សូមពិនិត្យព័ត៌មានមុនបញ្ជូន" />

      <div className="flex items-center gap-2 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800">
        <AlertCircle className="h-4 w-4 shrink-0" />
        <span>ពិនិត្យព័ត៌មានឱ្យបានត្រឹមត្រូវ</span>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {/* ── Left: summary ────────────────────────────────── */}
        <div className="space-y-4">
          <SectionCard title="ព្រឹត្តិការណ៍ និង កីឡា">
            <InfoRow label="ព្រឹត្តិការណ៍" value={formData.eventName} onEdit={() => onEdit(0)} />
            <InfoRow label="ស្ថាប័ន" value={formData.organizationName} onEdit={() => onEdit(1)} />
            <InfoRow label="កីឡា" value={formData.sportName} onEdit={() => onEdit(2)} />
            <InfoRow label="ប្រភេទ" value={formData.categoryName} onEdit={() => onEdit(3)} />
          </SectionCard>

          <SectionCard title="ព័ត៌មានផ្ទាល់ខ្លួន">
            <InfoRow
              label="នាម (ខ្មែរ)"
              value={formData.firstNameKhmer || '—'}
              onEdit={() => onEdit(4)}
            />
            <InfoRow
              label="គោត្តនាម (ខ្មែរ)"
              value={formData.lastNameKhmer || '—'}
              onEdit={() => onEdit(4)}
            />
            <InfoRow
              label="នាម (ឡាតាំង)"
              value={formData.firstNameLatin || '—'}
              onEdit={() => onEdit(4)}
            />
            <InfoRow
              label="គោត្តនាម (ឡាតាំង)"
              value={formData.lastNameLatin || '—'}
              onEdit={() => onEdit(4)}
            />
            <InfoRow
              label="ភេទ"
              value={formData.gender ? (GENDER_LABELS[formData.gender] ?? formData.gender) : '—'}
              onEdit={() => onEdit(4)}
            />
            <InfoRow
              label="ថ្ងៃ ខែ ឆ្នាំ"
              value={formData.dateOfBirth || '—'}
              onEdit={() => onEdit(4)}
            />
            <InfoRow
              label="លេខអត្តសញ្ញាណ"
              value={formData.nationalID || '—'}
              onEdit={() => onEdit(4)}
            />
            <InfoRow label="ទូរស័ព្ទ" value={formData.phone || '—'} onEdit={() => onEdit(4)} />
            <InfoRow label="ប្រភេទឯកសារ" value={idDocLabel} onEdit={() => onEdit(4)} />
            <InfoRow label="តួនាទី" value={roleLabel} onEdit={() => onEdit(4)} />
          </SectionCard>

          <SectionCard title="ឯកសារ">
            {/* Portrait — read from IndexedDB slot */}
            <InfoRow label="រូបថត" value={hasDoc('photoUpload')} onEdit={() => onEdit(4)} />

            {/* Each doc — read from IndexedDB slot, not React state */}
            {(() => {
              const selectedKeys = formData.nationality ? formData.nationality.split(',') : [];
              const selectedDocs = DOC_KEYS.filter((k) => selectedKeys.includes(k));
              if (selectedDocs.length === 0) {
                return (
                  <InfoRow
                    label="ឯកសារផ្ទៀងផ្ទាត់"
                    value="មិនបានជ្រើសរើស"
                    onEdit={() => onEdit(4)}
                  />
                );
              }
              return selectedDocs.map((key) => (
                <InfoRow
                  key={key}
                  label={DOC_LABELS[key]}
                  value={hasDoc(key)}
                  onEdit={() => onEdit(4)}
                />
              ));
            })()}
          </SectionCard>
        </div>

        {/* ── Right: card preview ───────────────────────────── */}
        <div className="flex flex-col items-center">
          <div className="sticky top-4 flex flex-col items-center gap-3">
            <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
              ម៉ូតប័ណ្ណ · Card Preview
            </p>
            <IDCardPreview formData={formData} photoUrl={photoPreviewUrl} />
            <button
              type="button"
              onClick={() => onEdit(4)}
              className="flex w-full items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-white py-2 text-xs text-slate-500 transition-colors hover:border-indigo-300 hover:text-indigo-600"
            >
              <Edit2 className="h-3 w-3" /> កែប្រែព័ត៌មាន
            </button>
          </div>
        </div>
      </div>

      {error && (
        <p className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          {error}
        </p>
      )}

      <div className="flex justify-center gap-3 pt-2">
        <Button variant="outline" onClick={() => onEdit(4)} disabled={loading}>
          កែសម្រួល
        </Button>
        {/* Disabled until IndexedDB slots finish loading */}
        <Button onClick={handleSubmit} disabled={loading || !slotsLoaded} className="min-w-40">
          {loading ? (
            <span className="flex items-center gap-2">
              <span className="animate-spin">⏳</span> កំពុងបញ្ជូន...
            </span>
          ) : !slotsLoaded ? (
            <span className="flex items-center gap-2">
              <span className="animate-pulse">⏳</span> កំពុងផ្ទុក...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4" /> បញ្ជាក់ ចុះឈ្មោះ
            </span>
          )}
        </Button>
      </div>
    </div>
  );
}
