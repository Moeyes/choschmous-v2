// domains/registrations/registrations.service.ts

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
} from './registrations.types';

export const registrationsService = {
  async getAll(filters: RegistrationFilters): Promise<{ data: Registration[]; total: number }> {
    const [data, total] = await Promise.all([
      registrationsRepository.findAll(filters),
      registrationsRepository.count(filters),
    ]);
    return { data, total };
  },

  async create(input: CreateRegistrationInput): Promise<{ enrollId: number; uuid: string | null }> {
    const parsed = createRegistrationSchema.parse(input);

    // ── 1. Create enrollment ──────────────────────────────────────────────────
    const enroll = await registrationsRepository.createEnroll({
      // Split name fields map directly to DB columns — no join/split needed
      khGivenName:
        (parsed as any).firstNameKhmer ||
        (parsed as any).fullNameKhmer?.split(' ').slice(1).join(' ') ||
        '',
      khFamilyName:
        (parsed as any).lastNameKhmer || (parsed as any).fullNameKhmer?.split(' ')[0] || '',
      enGivenName:
        (parsed as any).firstNameLatin || (parsed as any).fullNameEnglish?.split(' ')[0] || '',
      enFamilyName:
        (parsed as any).lastNameLatin ||
        (parsed as any).fullNameEnglish?.split(' ').slice(1).join(' ') ||
        '',

      gender: parsed.gender,
      nationality: parsed.nationality || 'Cambodian', // real nationality string

      dob: parsed.dateOfBirth,

      // idDocType from the user's doc selection — NOT derived from nationalID
      idDocType: (parsed as any).idDocType || (parsed.nationalID ? 'IDCard' : 'BirthCertificate'),

      phoneNumber: parsed.phone ?? null,
      address: (parsed as any).organizationAddress ?? null,
      userId: (parsed as any).userId ?? null,
      photoPath: (parsed as any).photoUrl ?? null,
      documentsPath: (parsed as any).nationalityDocumentUrl ?? null,
    });

    // ── 2. Branch: Athlete vs Leader ──────────────────────────────────────────
    if (parsed.role === 'Athlete') {
      const athlete = await registrationsRepository.createAthlete({ enroll_id: enroll.id });
      await registrationsRepository.createAthleteParticipation({
        athletesID: athlete.id,
        eventsID: parsed.eventId,
        categoryID: parsed.categoryId ?? null,
        sportsID: parsed.sportId,
        organizationID: parsed.organizationId,
      });
    } else {
      const leader = await registrationsRepository.createLeader({
        enroll_id: enroll.id,
        roles: (parsed as any).leaderRole ?? 'delegate',
      });
      await registrationsRepository.createLeaderParticipation({
        leadersID: leader.id,
        eventsID: parsed.eventId,
        sportsID: parsed.sportId,
        organizationID: parsed.organizationId,
      });
    }

    return { enrollId: enroll.id, uuid: enroll.uuid };
  },

  async updateStatus(input: UpdateRegistrationStatusInput): Promise<void> {
    const parsed = updateRegistrationStatusSchema.parse(input);
    console.warn('updateStatus: status column not yet in schema. enrollId:', parsed.enrollId);
  },
};
