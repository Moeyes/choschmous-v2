// ============================================================
// ui/features/registrations/types/registration.types.ts
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
} from '@/domains/registrations/registrations.types';

// ── API response shapes (used by step props) ──────────────────

export interface Event {
  id: string;
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

export interface RegistrationFormData {
  // Step 1 — Event
  eventId: string;
  eventName: string;

  // Step 2 — Organization
  organizationId: string;
  organizationName: string;
  organizationType: OrganizationType | '';

  // Step 3 — Sport
  sportId: string;
  sportName: string;

  // Step 4 — Category
  categoryId: string;
  categoryName: string;

  // Step 5 — Personal info
  fullNameKhmer: string;
  fullNameEnglish: string;
  gender: Gender | '';
  nationality: string;
  dateOfBirth: string; // ISO date string — matches CreateRegistrationInput
  nationalID: string;
  phone: string;

  // Step 5 — Role
  role: PositionRole | '';
  leaderRole: LeaderRole | '';
  athleteCategory: AthleteCategory | '';

  // Step 5 — File uploads (never sent to server action; use URLs instead)
  photoUpload: File | null;
  nationalityDocumentUpload: File | null;
}

// ── Validation errors ─────────────────────────────────────────

export type RegistrationErrors = Partial<Record<keyof RegistrationFormData, string>>;

// ── Base step props ───────────────────────────────────────────

export interface StepProps {
  formData: RegistrationFormData;
  setFields: (fields: Partial<RegistrationFormData>) => void;
  errors: RegistrationErrors;
  onNext: () => void;
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
