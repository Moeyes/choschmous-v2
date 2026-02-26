// ============================================================
// domains/registrations/registrations.service.ts
// Migrated from: src/features/registration/services/
// Includes normalization logic (was: registrationNormalizer.ts)
// ============================================================

import { registrationsRepository } from './registrations.repository';
import { createRegistrationSchema, updateRegistrationStatusSchema } from './registrations.validators';
import type {
  Registration, RegistrationFilters,
  CreateRegistrationInput, UpdateRegistrationStatusInput,
  AthleteCategory, LeaderRole,
} from './registrations.types';
import { slug } from '@/lib/utils/formatting';
// ── Normalizer (migrated from registrationNormalizer.ts) ─────

export interface NormalizedRegistration {
  fullNameKhmer: string | null;
  fullNameEnglish: string | null;
  dateOfBirth: string | null;
  gender: string | null;
  nationality: string | null;
  nationalID: string | null;
  phone: string | null;
  role: string | null;
  athleteCategory: string | null;
  leaderRole: string | null;
  coachName: string | null;
  assistantName: string | null;
  organizationType: string | null;
  organizationId: string | null;
  organizationName: string | null;
  eventId: string | null;
  sport: string | null;
  sports: string[];
  sportId: string | null;
  sportCategory: string | null;
  photoUrl: string | null;
  nationalityDocumentUrl: string | null;
  status: string;
  [key: string]: unknown;
}

export function normalizeRegistrationInput(body: Partial<CreateRegistrationInput & Record<string, unknown>>): NormalizedRegistration {
  const sports = Array.isArray(body.sports)
    ? body.sports.map(String)
    : body.sportId
    ? [String(body.sportId)]
    : [];

  const primarySport = sports[0] ?? null;
  const phone = typeof body.phone === 'string' ? body.phone.trim() : body.phone ?? null;
  const gender = (body.gender as string) ?? null;

  // Auto-derive athleteCategory from gender if role is Athlete and category not set
  let athleteCategory = (body.athleteCategory as string) ?? null;
  if (body.role === 'Athlete' && gender && !athleteCategory) {
    athleteCategory = gender; // Male/Female
  }

  return {
    fullNameKhmer: (body.fullNameKhmer as string) ?? null,
    fullNameEnglish: (body.fullNameEnglish as string) ?? null,
    dateOfBirth: (body.dateOfBirth as string) ?? null,
    gender,
    nationality: (body.nationality as string) ?? null,
    nationalID: (body.nationalID as string) ?? null,
    phone,
    role: (body.role as string) ?? null,
    athleteCategory,
    leaderRole: (body.leaderRole as string) ?? null,
    coachName: (body.coachName as string) ?? null,
    assistantName: (body.assistantName as string) ?? null,
    organizationType: (body as any).organization?.type ?? null,
    organizationId: String(body.organizationId ?? ''),
    organizationName: (body as any).organization?.name ?? null,
    eventId: body.eventId ? String(body.eventId) : null,
    sport: primarySport,
    sports,
    sportId: primarySport ? slug(primarySport) : null,
    sportCategory: (body.sportCategory as string) ?? null,
    photoUrl: (body.photoUrl as string) ?? null,
    nationalityDocumentUrl: (body.nationalityDocumentUrl as string) ?? null,
    status: 'pending',
  };
}

// ── Service ───────────────────────────────────────────────────

export const registrationsService = {

  async getAll(filters: RegistrationFilters): Promise<{ data: Registration[]; total: number }> {
    const [data, total] = await Promise.all([
      registrationsRepository.findAll(filters),
      registrationsRepository.count(filters),
    ]);
    return { data, total };
  },

  async create(input: CreateRegistrationInput): Promise<{ enrollId: number }> {
    const parsed = createRegistrationSchema.parse(input);

    // 1. Create base Enroll record
    const enroll = await registrationsRepository.createEnroll({
      userID: 0, // set from session in API layer
      name: parsed.fullNameEnglish ?? parsed.fullNameKhmer ?? '',
      gender: parsed.gender,
      nationality: parsed.nationality,
      dob: new Date(parsed.dateOfBirth),
      idDocType: parsed.nationality as any,
      address: null,
      photoPath: parsed.photoUrl ?? null,
      documentsPath: parsed.nationalityDocumentUrl ?? null,
    });

    // 2. Branch: Athlete vs Leader
    if (parsed.role === 'Athlete') {
      const athlete = await registrationsRepository.createAthlete({
        enrollID: enroll.id,
        class: parsed.athleteCategory ?? null,
        uniformSize: null,
      });

      await registrationsRepository.createAthleteParticipation({
        athletesID: athlete.id,
        eventsID: parsed.eventId,
        categoriesID: parsed.categoryId ?? 0,
        sportsID: parsed.sportId,
        organizationID: parsed.organizationId,
      });
    } else {
      const leader = await registrationsRepository.createLeader({
        enrollID: enroll.id,
        roles: (parsed.leaderRole ?? 'delegate') as LeaderRole,
        phoneNumber: parsed.phone,
      });

      await registrationsRepository.createLeaderParticipation({
        leadersID: leader.id,
        eventsID: parsed.eventId,
        sportsID: parsed.sportId,
        organizationID: parsed.organizationId,
      });
    }

    return { enrollId: enroll.id };
  },

  async updateStatus(input: UpdateRegistrationStatusInput): Promise<void> {
    const parsed = updateRegistrationStatusSchema.parse(input);
    // Status field needs to be added to Enroll in schema
    // For now: update when schema supports it
    // await registrationsRepository.updateStatus(parsed.enrollId, parsed.status);
    console.warn('updateStatus: status column not yet in schema. enrollId:', parsed.enrollId);
  },
};
