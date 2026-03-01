// ============================================================
// ui/features/registrations/types/Registration.types.ts
//
// UI-layer types for the registration wizard.
// Imports primitives from the domain layer — never re-declares them.
// ============================================================

export type {
  Gender,
  LeaderRole,
  IdDocType,
  PositionRole,
  AthleteCategory,
  RegistrationStatus,
  CreateRegistrationInput,
} from '@/domains/registrations/registrations.types';

import type {
  Gender,
  LeaderRole,
  PositionRole,
  AthleteCategory,
  IdDocType,
} from '@/domains/registrations/registrations.types';

// ── API response shapes (used by step props) ──────────────────

export interface Event {
  id: number | string;
  name: string;
  startDate?: string;
  endDate?: string;
  location?: string;
  sports?: Sport[];
}

export interface Sport {
  id: string;
  name: string;
  categories?: string[];
}

export interface OrgItem {
  id: string;
  /** Raw string from API — compared case-insensitively */
  type: string;
  name: string;
  khmerName?: string;
}

export type OrganizationType = 'province' | 'ministry';

// ── Wizard form state ─────────────────────────────────────────
//
// Mirrors CreateRegistrationInput but:
//   • all IDs are strings (HTML inputs / SelectionPills)
//   • carries human-readable *Name fields for display
//   • holds File objects for uploads (stripped before server action)
//
// Split-name fields (firstNameKhmer etc.) are the UI's internal
// representation. They are joined into fullNameKhmer / fullNameEnglish
// before being handed to CreateRegistrationInput.

export interface RegistrationFormData {
  // ── Step 1 — Event ─────────────────────────────────────────
  eventId: string;
  eventName: string;

  // ── Step 2 — Organization ──────────────────────────────────
  organizationId: string;
  organizationName: string;
  organizationType: OrganizationType | '';

  // ── Step 3 — Sport ─────────────────────────────────────────
  sportId: string;
  sportName: string;

  // ── Step 4 — Category ──────────────────────────────────────
  categoryId: string;
  categoryName: string;

  // ── Step 5 — Personal info: split name fields ──────────────
  // These are the canonical UI fields going forward.
  // fullNameKhmer / fullNameEnglish are kept for backward-compat
  // with the confirmation step and CreateRegistrationInput DTO.
  firstNameKhmer: string;
  lastNameKhmer: string;
  firstNameLatin: string;
  lastNameLatin: string;

  /** @deprecated — derived from firstNameKhmer + lastNameKhmer; kept for DTO compat */
  fullNameKhmer: string;
  /** @deprecated — derived from firstNameLatin + lastNameLatin; kept for DTO compat */
  fullNameEnglish: string;

  // ── Step 5 — Identity ──────────────────────────────────────
  gender: Gender | '';
  nationality: string;
  dateOfBirth: string; // ISO date string — matches CreateRegistrationInput
  nationalID: string;
  phone: string;

  // ── Step 5 — Verification document type ────────────────────
  // Maps directly to domain IdDocType; UI allows 'Passport' as an
  // additional display option before normalising to IDCard | BirthCertificate.
  idDocType: IdDocType | '';

  // ── Step 5 — Role ──────────────────────────────────────────
  role: PositionRole | '';
  leaderRole: LeaderRole | '';
  athleteCategory: AthleteCategory | '';

  // ── Step 5 — File uploads ───────────────────────────────────
  // File objects are NEVER sent to the server action; the action
  // receives URL strings instead.  These slots hold the in-memory
  // File while the wizard is open; IndexedDB holds them across refreshes.
  photoUpload: File | null; // portrait 4×6
  nationalityDocumentUpload: File | null; // legacy single-doc slot (compat)

  // Named doc slots — used by the new PersonalInfoStep upload grid.
  // Each slot corresponds to a PhotoStorage slotId key.
  docBirthCertificate: File | null;
  docNationalId: File | null;
  docPassport: File | null;
}

// ── Validation errors ─────────────────────────────────────────
// Covers every field in RegistrationFormData so the step components
// can reference error keys without casting to `any`.

export type RegistrationErrors = Partial<Record<keyof RegistrationFormData, string>>;

// ── Base step props ───────────────────────────────────────────

export interface StepProps {
  formData: RegistrationFormData;
  setFields: (fields: Partial<RegistrationFormData>) => void;
  errors: RegistrationErrors;
  onNext: () => void;
  // if (clearErrors) clearErrors(Object.keys(patch) as (keyof RegistrationFormData)[]);
  clearErrors?: (fieldKeys: (keyof RegistrationFormData)[]) => void;
}

// ── Helpers: derive DTO-compatible full names ─────────────────

export function buildFullNameKhmer(first: string, last: string): string {
  return [last, first].filter(Boolean).join(' ');
}

export function buildFullNameLatin(first: string, last: string): string {
  return [last, first].filter(Boolean).join(' ');
}

// ── Display label maps ────────────────────────────────────────

export const GENDER_LABELS: Record<Gender, string> = {
  Male: 'ប្រុស',
  Female: 'ស្រី',
};

export const ROLE_LABELS: Record<LeaderRole | 'Athlete', string> = {
  Athlete: 'កីឡាករ/កីឡាការិនី',
  coach: 'គ្រូបង្ហាត់',
  manager: 'អ្នកគ្រប់គ្រង',
  delegate: 'ប្រតិភូ',
  team_lead: 'ប្រធានក្រុម',
  coach_trainer: 'គ្រូបង្ហាត់ជំនាញ',
  teacher_assistant: 'ជំនួយការ',
};

export const ID_DOC_LABELS: Record<IdDocType | 'Passport', string> = {
  IDCard: 'អត្តសញ្ញាណប័ណ្ណ',
  BirthCertificate: 'សំបុត្រកំណើត',
  Passport: 'លិខិតឆ្លងដែន',
  FamilyBook: 'សៀវភៅគ្រួសារ',
  Other: 'ផ្សេងៗ',
};

// ── Select option arrays ──────────────────────────────────────

export const GENDER_OPTIONS: { value: Gender; label: string }[] = [
  { value: 'Male', label: GENDER_LABELS.Male },
  { value: 'Female', label: GENDER_LABELS.Female },
];

export const NATIONALITY_OPTIONS = [
  { value: 'Khmer', label: 'ខ្មែរ' },
  { value: 'Foreign', label: 'បរទេស' },
] as const;

export const LEADER_ROLE_OPTIONS: { value: LeaderRole; label: string }[] = [
  { value: 'coach', label: ROLE_LABELS.coach },
  { value: 'manager', label: ROLE_LABELS.manager },
  { value: 'delegate', label: ROLE_LABELS.delegate },
  { value: 'team_lead', label: ROLE_LABELS.team_lead },
  { value: 'coach_trainer', label: ROLE_LABELS.coach_trainer },
  { value: 'teacher_assistant', label: ROLE_LABELS.teacher_assistant },
];

export const ID_DOC_OPTIONS: { value: IdDocType | 'Passport'; label: string }[] = [
  { value: 'BirthCertificate', label: ID_DOC_LABELS.BirthCertificate },
  { value: 'IDCard', label: ID_DOC_LABELS.IDCard },
  { value: 'Passport', label: ID_DOC_LABELS.Passport },
];

// ── Empty / initial form state ────────────────────────────────
// Use this as the initial value in useRegistration / RegistrationWizard
// so all keys are always defined.

export const EMPTY_FORM_DATA: RegistrationFormData = {
  eventId: '',
  eventName: '',
  organizationId: '',
  organizationName: '',
  organizationType: '',
  sportId: '',
  sportName: '',
  categoryId: '',
  categoryName: '',
  firstNameKhmer: '',
  lastNameKhmer: '',
  firstNameLatin: '',
  lastNameLatin: '',
  fullNameKhmer: '',
  fullNameEnglish: '',
  gender: '',
  nationality: '',
  dateOfBirth: '',
  nationalID: '',
  phone: '',
  idDocType: '',
  role: '',
  leaderRole: '',
  athleteCategory: '',
  photoUpload: null,
  nationalityDocumentUpload: null,
  docBirthCertificate: null,
  docNationalId: null,
  docPassport: null,
};
