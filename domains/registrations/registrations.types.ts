// ============================================================
// domains/registrations/registrations.types.ts
// ============================================================

// ── Enums / Literals ──────────────────────────────────────────

export type RegistrationStatus = 'pending' | 'approved' | 'rejected';
export type Gender = 'Male' | 'Female';
export type IdDocType = 'IDCard' | 'BirthCertificate' | 'Passport' | 'FamilyBook' | 'Other';
export type PositionRole = 'Athlete' | 'Leader' | 'Technical';
export type AthleteCategory = 'Male' | 'Female';
export type LeaderRole =
  | 'coach'
  | 'manager'
  | 'delegate'
  | 'team_lead'
  | 'coach_trainer'
  | 'teacher_assistant';

// ── Core DB Tables ────────────────────────────────────────────

export interface Enroll {
  id: number;
  userID: number;
  name: string;
  gender: Gender;
  nationality: string;
  dob: Date;
  idDocType: IdDocType;
  address: string | null;
  photoPath: string | null;
  documentsPath: string | null;
  createdAt: Date;
}

export interface Athlete {
  id: number;
  enrollID: number;
  class: string | null;
  uniformSize: string | null;
  createdAt: Date;
}

export interface Leader {
  id: number;
  enrollID: number;
  roles: LeaderRole;
  phoneNumber: string;
  createdAt: Date;
}

export interface AthleteParticipation {
  id: number;
  athletesID: number;
  eventsID: number;
  categoriesID: number;
  sportsID: number;
  organizationID: number;
  createdAt: Date;
}

export interface LeaderParticipation {
  id: number;
  leadersID: number;
  eventsID: number;
  sportsID: number;
  organizationID: number;
  createdAt: Date;
}

// ── Composite / View types ────────────────────────────────────

export interface Registration {
  enrollId: number;
  name: string;
  gender: Gender;
  nationality: string;
  dob: Date;
  idDocType: IdDocType;
  photoPath: string | null;
  documentsPath: string | null;
  role: PositionRole;
  status: RegistrationStatus;
  athleteClass: string | null;
  athleteCategory: AthleteCategory | null;
  leaderRole: LeaderRole | null;
  phoneNumber: string | null;
  eventId: number | null;
  sportId: number | null;
  categoryId: number | null;
  organizationId: number | null;
  createdAt: Date;
}

// ── Input DTOs ────────────────────────────────────────────────

export interface CreateRegistrationInput {
  // ── Name — split fields (preferred, map directly to DB columns) ──
  // kh_given_name, kh_family_name, en_given_name, en_family_name
  firstNameKhmer?: string | null; // → kh_given_name
  lastNameKhmer?: string | null; // → kh_family_name
  firstNameLatin?: string | null; // → en_given_name
  lastNameLatin?: string | null; // → en_family_name

  // ── Kept for backward compat — used if split fields are empty ──
  fullNameKhmer?: string | null;
  fullNameEnglish?: string | null;

  // ── Identity ──────────────────────────────────────────────────
  gender: Gender;
  dateOfBirth: string;
  nationality: string; // actual nationality → enrollments.nationality
  nationalID: string;
  phone: string;

  // ── Document type — maps to id_document_type enum ─────────────
  idDocType?: IdDocType | string | null;

  // ── File paths (set after upload via PATCH) ───────────────────
  photoUrl?: string | null;
  nationalityDocumentUrl?: string | null;

  // ── Role ──────────────────────────────────────────────────────
  role: PositionRole;
  athleteCategory?: AthleteCategory | null;
  leaderRole?: LeaderRole | null;
  coachName?: string | null;
  assistantName?: string | null;

  // ── Context ───────────────────────────────────────────────────
  eventId: number;
  sportId: number;
  categoryId?: number | null;
  organizationId: number;
  sports?: number[];
  sportCategory?: string | null;

  // ── Internal (not sent to DB directly) ────────────────────────
  userId?: string | null; // session user id
  organizationAddress?: string | null;
}

export interface UpdateRegistrationStatusInput {
  enrollId: number;
  status: RegistrationStatus;
}

// ── Filters ───────────────────────────────────────────────────

export interface RegistrationFilters {
  eventId?: number;
  sportId?: number;
  organizationId?: number;
  status?: RegistrationStatus;
  role?: PositionRole;
  gender?: Gender;
  search?: string;
  page?: number;
  limit?: number;
}
