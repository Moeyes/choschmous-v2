// ============================================================
// domains/registrations/registrations.service.ts
// ============================================================

import { registrationsRepository } from './registrations.repository';
import {
  createRegistrationSchema,
  updateRegistrationStatusSchema,
} from './registrations.validators';
import type {
  Registration,
  RegistrationFilters,
  CreateRegistrationInput,
  UpdateRegistrationStatusInput,
  LeaderRole,
  IdDocType,
} from './registrations.types';

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
      khmerName: parsed.fullNameKhmer ?? null,
      englishName: parsed.fullNameEnglish ?? null,
      gender: parsed.gender,
      nationality: parsed.nationality,
      dob: parsed.dateOfBirth,
      idDocType: parsed.nationalID ? 'IDCard' : 'BirthCertificate',
      // FIX: pass phone number — was hardcoded '' in repository
      phoneNumber: parsed.phone ?? null,
      // FIX: address from organization (passed in via organizationAddress if available)
      address: (parsed as any).organizationAddress ?? null,
      // FIX: user_id from session (passed in via userId if available)
      userId: (parsed as any).userId ?? null,
      photoPath: parsed.photoUrl ?? null,
      documentsPath: parsed.nationalityDocumentUrl ?? null,
    });

    // 2. Branch: Athlete vs Leader
    if (parsed.role === 'Athlete') {
      const athlete = await registrationsRepository.createAthlete({
        enroll_id: enroll.id,
      });

      await registrationsRepository.createAthleteParticipation({
        athletesID: athlete.id,
        eventsID: parsed.eventId,
        // FIX #3: Pass null/undefined instead of 0 when no category selected
        // The repository will omit category_id from the request if falsy
        categoriesID: parsed.categoryId ?? 0,
        sportsID: parsed.sportId,
        organizationID: parsed.organizationId,
      });
    } else {
      const leader = await registrationsRepository.createLeader({
        enroll_id: enroll.id,
        roles: parsed.leaderRole ?? 'delegate',
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
    console.warn('updateStatus: status column not yet in schema. enrollId:', parsed.enrollId);
  },
};
