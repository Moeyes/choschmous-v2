// ============================================================
// ui/features/registrations/types/Registration.types.tsx
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

// ── API response shapes ───────────────────────────────────────

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
  type: string;
  name: string;
  khmerName?: string;
}

export type OrganizationType = 'province' | 'ministry';

// ── Wizard form state ─────────────────────────────────────────

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

  // ── Step 5 — Name (split fields → map to DB columns directly) ─
  firstNameKhmer: string; // → kh_given_name
  lastNameKhmer: string; // → kh_family_name
  firstNameLatin: string; // → en_given_name
  lastNameLatin: string; // → en_family_name

  /** @deprecated — derived from split fields; kept for DTO compat */
  fullNameKhmer: string;
  /** @deprecated — derived from split fields; kept for DTO compat */
  fullNameEnglish: string;

  // ── Step 5 — Identity ──────────────────────────────────────
  gender: Gender | '';
  /** Actual nationality string → enrollments.nationality (e.g. 'Cambodian') */
  nationality: string;
  dateOfBirth: string;
  nationalID: string;
  phone: string;

  // ── Step 5 — Document type (single enum) ───────────────────
  /** Maps to enrollments.id_document_type — set from doc checkbox selection */
  idDocType: IdDocType | '';

  /**
   * Comma-separated doc slot keys the user checked in PersonalInfoStep.
   * UI-only — controls which upload slots are shown. NOT sent to the DB.
   * e.g. "docNationalId,docBirthCertificate"
   *
   * Previously this was wrongly stored in `nationality`, corrupting that field.
   */
  selectedDocKeys: string;

  // ── Step 5 — Role ──────────────────────────────────────────
  role: PositionRole | '';
  leaderRole: LeaderRole | '';
  athleteCategory: AthleteCategory | '';

  // ── Step 5 — File uploads ───────────────────────────────────
  photoUpload: File | null;
  nationalityDocumentUpload: File | null;
  docBirthCertificate: File | null;
  docNationalId: File | null;
  docPassport: File | null;
}

// ── Validation errors ─────────────────────────────────────────

export type RegistrationErrors = Partial<Record<keyof RegistrationFormData, string>>;

// ── Step props ────────────────────────────────────────────────

export interface StepProps {
  formData: RegistrationFormData;
  setFields: (fields: Partial<RegistrationFormData>) => void;
  errors: RegistrationErrors;
  onNext: () => void;
  clearErrors?: (fieldKeys: (keyof RegistrationFormData)[]) => void;
}

// ── Helpers ───────────────────────────────────────────────────

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

// ── Select options ────────────────────────────────────────────

export const GENDER_OPTIONS: { value: Gender; label: string }[] = [
  { value: 'Male', label: GENDER_LABELS.Male },
  { value: 'Female', label: GENDER_LABELS.Female },
];

export const NATIONALITY_OPTIONS = [
  { value: 'Cambodian', label: 'ខ្មែរ' },
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

export const ID_DOC_OPTIONS: { value: IdDocType; label: string }[] = [
  { value: 'BirthCertificate', label: ID_DOC_LABELS.BirthCertificate },
  { value: 'IDCard', label: ID_DOC_LABELS.IDCard },
  { value: 'Passport', label: ID_DOC_LABELS.Passport },
];

// ── Empty / initial form state ────────────────────────────────

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
  selectedDocKeys: '', // ← NEW: replaces the misuse of nationality for doc keys
  role: '',
  leaderRole: '',
  athleteCategory: '',
  photoUpload: null,
  nationalityDocumentUpload: null,
  docBirthCertificate: null,
  docNationalId: null,
  docPassport: null,
};
