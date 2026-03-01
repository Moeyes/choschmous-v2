// ============================================================
// domains/registrations/registrations.validators.ts
// ============================================================

import { z } from 'zod';
import { PATTERNS, UPLOAD_LIMITS } from '@/config/constants';

// ── Primitives ────────────────────────────────────────────────

export const phoneSchema = z
  .string()
  .trim()
  .regex(PATTERNS.phone, 'លេខទូរស័ព្ទមិនត្រឹមត្រូវ (7–15 ខ្ទង់)');

export const nationalIDSchema = z
  .string()
  .trim()
  .min(6, 'លេខអត្តសញ្ញាណត្រូវមានយ៉ាងហោចណាស់ 6 ខ្ទង់')
  .max(20, 'លេខអត្តសញ្ញាណមិនអាចលើស 20 ខ្ទង់');

export const pastDateSchema = z.string().refine((val) => {
  const date = new Date(val);
  return !isNaN(date.getTime()) && date <= new Date();
}, 'ថ្ងៃកំណើតមិនត្រឹមត្រូវ');

// FIX: Accept both absolute URLs (https://...) and relative paths (/uploads/...)
// The backend receives absolute URLs; conversion happens in submitRegistration.ts
export const urlOrPathSchema = z
  .string()
  .nullable()
  .optional()
  .refine(
    (val) => {
      if (!val) return true; // null/undefined is fine
      try {
        new URL(val); // valid absolute URL
        return true;
      } catch {
        return val.startsWith('/'); // or a relative path like /uploads/...
      }
    },
    { message: 'Invalid URL or path' }
  );

// ── Enums ─────────────────────────────────────────────────────

export const genderSchema = z.enum(['Male', 'Female', 'Other']);

export const idDocTypeSchema = z.enum([
  'IDCard',
  'BirthCertificate',
  'Passport',
  'FamilyBook',
  'Other',
]);

export const positionRoleSchema = z.enum(['Athlete', 'Leader', 'Technical']);

export const athleteCategorySchema = z.enum(['Male', 'Female']);

export const leaderRoleSchema = z.enum([
  'coach',
  'manager',
  'delegate',
  'team_lead',
  'coach_trainer',
  'teacher_assistant',
]);

export const registrationStatusSchema = z.enum(['pending', 'approved', 'rejected']);

// ── Position ──────────────────────────────────────────────────

export const positionSchema = z
  .object({
    role: positionRoleSchema,
    athleteCategory: athleteCategorySchema.nullable().optional(),
    leaderRole: leaderRoleSchema.nullable().optional(),
    coach: z.string().nullable().optional(),
    assistant: z.string().nullable().optional(),
  })
  .refine((pos) => !(pos.role === 'Athlete' && !pos.athleteCategory), {
    message: 'សូមជ្រើសរើសប្រភេទកីឡាករ',
    path: ['athleteCategory'],
  })
  .refine((pos) => !(pos.role === 'Leader' && !pos.leaderRole), {
    message: 'សូមបញ្ចូលតួនាទីអ្នកដឹកនាំ',
    path: ['leaderRole'],
  });

// ── Organization ──────────────────────────────────────────────

export const organizationSchema = z.object({
  type: z.string().min(1, 'ត្រូវបញ្ចូល'),
  id: z.union([z.string(), z.number()]).nullable().optional(),
  name: z.string().nullable().optional(),
  province: z.string().nullable().optional(),
  department: z.string().nullable().optional(),
});

// ── Create Registration ───────────────────────────────────────

export const createRegistrationSchema = z
  .object({
    fullNameKhmer: z.string().trim().nullable().optional(),
    fullNameEnglish: z.string().trim().nullable().optional(),
    gender: genderSchema,
    dateOfBirth: pastDateSchema,
    nationality: z.string().min(1, 'ត្រូវបញ្ចូល'),
    nationalID: nationalIDSchema,
    phone: phoneSchema,
    // FIX: Use urlOrPathSchema instead of z.string().url() — storage service
    // returns relative paths like /uploads/img/abc.jpg, not absolute URLs.
    // submitRegistration.ts converts to absolute before calling the backend.
    photoUrl: urlOrPathSchema,
    nationalityDocumentUrl: urlOrPathSchema,
    role: positionRoleSchema,
    athleteCategory: athleteCategorySchema.nullable().optional(),
    leaderRole: leaderRoleSchema.nullable().optional(),
    eventId: z.number().int().positive(),
    sportId: z.number().int().positive(),
    categoryId: z.number().int().positive().nullable().optional(),
    organizationId: z.number().int().positive(),
    sports: z.array(z.number().int().positive()).optional(),
    sportCategory: z.string().nullable().optional(),
  })
  .refine((data) => !!(data.fullNameKhmer?.trim() || data.fullNameEnglish?.trim()), {
    message: 'សូមបញ្ចូលឈ្មោះខ្មែរ ឬ អង់គ្លេស',
    path: ['fullNameKhmer'],
  });

export const updateRegistrationStatusSchema = z.object({
  enrollId: z.number().int().positive(),
  status: registrationStatusSchema,
});

// ── File Validation (client-side only — not sent to server) ──

export function validateImageFile(file: File): string | null {
  if (!file.type.startsWith('image/')) {
    return 'សូមជ្រើសរើសប្រភេទរូបភាព (JPG, PNG, ...)';
  }
  if (file.size > UPLOAD_LIMITS.maxImageSize) {
    return 'រូបភាពត្រូវតែតិចជាង 2MB';
  }
  return null;
}

// ── Exported types ────────────────────────────────────────────

export type CreateRegistrationData = z.infer<typeof createRegistrationSchema>;
export type UpdateRegistrationStatusData = z.infer<typeof updateRegistrationStatusSchema>;
