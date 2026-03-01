'use server';
// ui/features/registrations/actions/submitRegistration.ts
//
// DB columns written per submission:
//   kh_given_name    ← firstNameKhmer
//   kh_family_name   ← lastNameKhmer
//   en_given_name    ← firstNameLatin
//   en_family_name   ← lastNameLatin
//   gender           ← gender
//   date_of_birth    ← dateOfBirth
//   phonenumber      ← phone
//   nationality      ← nationality  (real string e.g. "Cambodian", NOT doc keys)
//   id_document_type ← idDocType    (the enum value the user selected)
//   photo_path       ← set via PATCH after upload
//   documents_path   ← set via PATCH after upload
//   user_id          ← session userId if logged in, else null

import { registrationsService } from '@/domains/registrations/registrations.service';
import type { RegistrationFormData } from '../types/Registration.types';
import type { CreateRegistrationInput } from '@/domains/registrations/registrations.types';

export interface SubmitResult {
  success: boolean;
  enrollId?: number;
  error?: string;
}

const APP_BASE =
  process.env.NEXT_PUBLIC_APP_URL ||
  (process.env.NODE_ENV === 'production'
    ? 'https://choschmous.example.com'
    : 'http://localhost:3000');

export async function submitRegistrationAction(
  data: Omit<
    RegistrationFormData,
    | 'photoUpload'
    | 'nationalityDocumentUpload'
    | 'docBirthCertificate'
    | 'docNationalId'
    | 'docPassport'
  >,
  photoFile: File | null,
  documentFile: File | null
): Promise<SubmitResult> {
  try {
    // ── Session user id ───────────────────────────────────────────────────────
    let userId: string | null = null;
    try {
      const { getSession } = await import('@/infrastructure/session/session.service');
      const session = await getSession();
      userId = (session as any)?.userId ?? (session as any)?.id ?? null;
    } catch {
      // public registration — no session, user_id stays null in DB
    }

    // ── Build the CreateRegistrationInput ─────────────────────────────────────
    const input: CreateRegistrationInput & {
      userId?: string | null;
      organizationAddress?: string | null;
    } = {
      // Split name fields — map directly to kh_given/family, en_given/family
      firstNameKhmer: data.firstNameKhmer,
      lastNameKhmer: data.lastNameKhmer,
      firstNameLatin: data.firstNameLatin,
      lastNameLatin: data.lastNameLatin,
      // Derived full names for backward compat
      fullNameKhmer:
        [data.lastNameKhmer, data.firstNameKhmer].filter(Boolean).join(' ') || data.fullNameKhmer,
      fullNameEnglish:
        [data.lastNameLatin, data.firstNameLatin].filter(Boolean).join(' ') || data.fullNameEnglish,

      gender: data.gender as 'Male' | 'Female',
      dateOfBirth: data.dateOfBirth,

      // nationality must be the real nationality string — selectedDocKeys
      // is now the dedicated field for doc checkbox state
      nationality: data.nationality || 'Cambodian',

      nationalID: data.nationalID,
      phone: data.phone,

      // idDocType from the user's actual selection in PersonalInfoStep
      idDocType: data.idDocType || undefined,

      photoUrl: null, // set after upload via PATCH
      nationalityDocumentUrl: null, // set after upload via PATCH

      role: data.role as 'Athlete' | 'Leader',
      athleteCategory: (data.athleteCategory as 'Male' | 'Female') || null,
      leaderRole: (data.leaderRole as any) || null,

      eventId: Number(data.eventId),
      sportId: Number(data.sportId),
      categoryId: data.categoryId ? Number(data.categoryId) : null,
      organizationId: Number(data.organizationId),

      userId,
      organizationAddress: null,
    };

    // ── Step 1: Create enrollment ─────────────────────────────────────────────
    const result = await registrationsService.create(input);
    const { enrollId, uuid } = result;

    // ── Step 2: Upload files ──────────────────────────────────────────────────
    // uuid is null for public registrations — fall back to enrollId as folder key
    const folderKey = uuid ?? `enroll-${enrollId}`;

    if (photoFile || documentFile) {
      const uploadForm = new FormData();
      uploadForm.set('enrollId', String(enrollId));
      uploadForm.set('uuid', folderKey);
      if (photoFile) uploadForm.set('photo', photoFile);
      if (documentFile) uploadForm.set('document', documentFile);

      const uploadRes = await fetch(`${APP_BASE}/api/upload`, {
        method: 'POST',
        body: uploadForm,
      });

      if (!uploadRes.ok) {
        const err = await uploadRes.json().catch(() => ({}));
        console.warn('[submitRegistration] upload warning:', err);
      }
    }

    return { success: true, enrollId };
  } catch (err) {
    console.error('[submitRegistrationAction] error:', err);
    return {
      success: false,
      error: err instanceof Error ? err.message : 'ការដាក់ស្នើបរាជ័យ',
    };
  }
}
