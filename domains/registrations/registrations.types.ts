// ============================================================
// domains/registrations/registrations.types.ts
// Derived from: Enroll + Athletes + Leaders + AthleteParticipat
//               + LeaderParticipat tables in ER diagram
// ============================================================

// ── Enums / Literals ──────────────────────────────────────────

export type RegistrationStatus = 'pending' | 'approved' | 'rejected';
export type Gender = 'Male' | 'Female';
export type IdDocType = 'IDCard' | 'BirthCertificate';
export type PositionRole = 'Athlete' | 'Leader' | 'Technical';
export type AthleteCategory = 'Male' | 'Female'; // maps to gender-based category
export type LeaderRole =
  | 'coach'
  | 'manager'
  | 'delegate'
  | 'team_lead'
  | 'coach_trainer'
  | 'teacher_assistant';

// ── Core DB Tables ────────────────────────────────────────────

/**
 * Maps to: Enroll table
 * Base participant record — shared between Athletes and Leaders
 */
export interface Enroll {
  id: number;
  userID: number;        // FK → Users.id
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

/**
 * Maps to: Athletes table
 * Extends Enroll for athlete-specific data
 */
export interface Athlete {
  id: number;
  enrollID: number;      // FK → Enroll.id (1:1)
  class: string | null;
  uniformSize: string | null;
  createdAt: Date;
}

/**
 * Maps to: Leaders table
 * Extends Enroll for leader-specific data
 */
export interface Leader {
  id: number;
  enrollID: number;      // FK → Enroll.id (1:1)
  roles: LeaderRole;
  phoneNumber: string;   // unique
  createdAt: Date;
}

/**
 * Maps to: AthleteParticipat table
 * Links Athletes to Events × Sports × Categories × Organizations
 */
export interface AthleteParticipation {
  id: number;
  athletesID: number;       // FK → Athletes.id
  eventsID: number;         // FK → Events.id
  categoriesID: number;     // FK → categories.id
  sportsID: number;         // FK → Sports.id
  organizationID: number;   // FK → Organization.id
  createdAt: Date;
}

/**
 * Maps to: LeaderParticipat table
 * Links Leaders to Events × Sports × Organizations
 */
export interface LeaderParticipation {
  id: number;
  leadersID: number;        // FK → Leaders.id
  eventsID: number;         // FK → Events.id
  sportsID: number;         // FK → Sports.id
  organizationID: number;   // FK → Organization.id
  createdAt: Date;
}

// ── Composite / View types ────────────────────────────────────

/** Full registration record as returned by the API */
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
  // Athlete-specific (null if Leader)
  athleteClass: string | null;
  athleteCategory: AthleteCategory | null;
  // Leader-specific (null if Athlete)
  leaderRole: LeaderRole | null;
  phoneNumber: string | null;
  // Participation context
  eventId: number | null;
  sportId: number | null;
  categoryId: number | null;
  organizationId: number | null;
  createdAt: Date;
}

// ── Input DTOs ────────────────────────────────────────────────

export interface CreateRegistrationInput {
  // Enroll fields
  fullNameKhmer: string | null;
  fullNameEnglish: string | null;
  gender: Gender;
  dateOfBirth: string;       // ISO date string
  nationality: string;
  nationalID: string;
  phone: string;
  photoUrl?: string | null;
  nationalityDocumentUrl?: string | null;

  // Role
  role: PositionRole;
  athleteCategory?: AthleteCategory | null;
  leaderRole?: LeaderRole | null;
  coachName?: string | null;
  assistantName?: string | null;

  // Context
  eventId: number;
  sportId: number;
  categoryId?: number | null;
  organizationId: number;
  sports?: number[];         // for multi-sport registrations
  sportCategory?: string | null;
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
