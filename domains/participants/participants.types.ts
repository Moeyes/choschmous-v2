// ============================================================
// domains/participants/participants.types.ts
// Derived from: Enroll + Athletes + Leaders + participation tables
// Note: "Participant" is the aggregate view of Enroll + role subtype
// ============================================================

import type { Gender, IdDocType, PositionRole, AthleteCategory, LeaderRole, RegistrationStatus } from '../registrations/registrations.types';

/** Enriched participant view for display in admin/superadmin panels */
export interface Participant {
  enrollId: number;
  fullNameKhmer: string | null;
  fullNameEnglish: string | null;
  gender: Gender;
  dateOfBirth: Date;
  nationality: string;
  idDocType: IdDocType;
  nationalID: string;
  phone: string | null;
  photoUrl: string | null;
  documentsUrl: string | null;
  role: PositionRole;
  athleteCategory: AthleteCategory | null;
  leaderRole: LeaderRole | null;
  status: RegistrationStatus;
  // Context
  eventId: number | null;
  eventName: string | null;
  sportId: number | null;
  sportName: string | null;
  organizationId: number | null;
  organizationName: string | null;
  createdAt: Date;
}

export interface ParticipantFilters {
  eventId?: number;
  sportId?: number;
  organizationId?: number;
  role?: PositionRole;
  gender?: Gender;
  status?: RegistrationStatus;
  search?: string;
  page?: number;
  limit?: number;
}

export interface ParticipantStats {
  total: number;
  athletes: number;
  leaders: number;
  male: number;
  female: number;
  approved: number;
  pending: number;
  rejected: number;
}
