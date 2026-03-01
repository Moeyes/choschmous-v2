// ============================================================
// domains/registrations/registrations.types.ts
// ============================================================

// ── Enums / Literals ──────────────────────────────────────────

export type RegistrationStatus = 'pending' | 'approved' | 'rejected';
export type Gender = 'Male' | 'Female' | 'Other';
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

/** Maps to: enrollments table */
export interface Enroll {
  id: number;
  khFamilyName: string;
  khGivenName: string;
  enFamilyName: string;
  enGivenName: string;
  phonenumber: string;
  gender: Gender;
  nationality: string;
  dob: Date;
  idDocType: IdDocType;
  address: string | null;
  photoPath: string | null;
  documentsPath: string | null;
  userId: string | null; // UUID FK → users.id
  createdAt: Date;
}

/** Maps to: athletes table (id, enroll_id, created_at) */
export interface Athlete {
  id: number;
  enrollID: number;
  createdAt: Date;
}

/** Maps to: leaders table (id, LeaderRole, enroll_id, created_at) */
export interface Leader {
  id: number;
  enrollID: number;
  leaderRole: string | null; // LeaderRole enum (currently empty in backend)
  createdAt: Date;
}

export interface AthleteParticipation {
  id: number;
  athletesID: number; // FK → athletes.id
  eventsID: number; // FK → events.id
  sportsID: number; // FK → sports.id
  categoryID: number | null; // FK → categories.id (nullable)
  organizationID: number; // FK → organizations.id
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
  phonenumber: string | null;
  photoPath: string | null;
  documentsPath: string | null;
  role: PositionRole;
  status: RegistrationStatus;
  athleteCategory: AthleteCategory | null;
  leaderRole: LeaderRole | null;
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
