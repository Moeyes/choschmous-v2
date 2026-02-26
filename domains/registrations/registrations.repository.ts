// ============================================================
// domains/registrations/registrations.repository.ts
// All Prisma queries for the Registrations domain
// Covers: Enroll + Athletes/Leaders + participation junction tables
// ============================================================

import { prisma } from '@/infrastructure/db/prisma';
import type {
  Enroll, Athlete, Leader,
  AthleteParticipation, LeaderParticipation,
  Registration, RegistrationFilters,
} from './registrations.types';

export const registrationsRepository = {

  // ── Enroll ──────────────────────────────────────────────────

  async createEnroll(data: Omit<Enroll, 'id' | 'createdAt'>): Promise<Enroll> {
    return prisma.enroll.create({ data });
  },

  async findEnrollById(id: number): Promise<Enroll | null> {
    return prisma.enroll.findUnique({ where: { id } });
  },

  // ── Athletes ─────────────────────────────────────────────────

  async createAthlete(data: Omit<Athlete, 'id' | 'createdAt'>): Promise<Athlete> {
    return prisma.athletes.create({ data: { enrollID: data.enrollID, class: data.class, uniformSize: data.uniformSize } });
  },

  async createAthleteParticipation(
    data: Omit<AthleteParticipation, 'id' | 'createdAt'>
  ): Promise<AthleteParticipation> {
    return prisma.athleteParticipat.create({ data });
  },

  // ── Leaders ──────────────────────────────────────────────────

  async createLeader(data: Omit<Leader, 'id' | 'createdAt'>): Promise<Leader> {
    return prisma.leaders.create({ data: { enrollID: data.enrollID, roles: data.roles, phoneNumber: data.phoneNumber } });
  },

  async createLeaderParticipation(
    data: Omit<LeaderParticipation, 'id' | 'createdAt'>
  ): Promise<LeaderParticipation> {
    return prisma.leaderParticipat.create({ data });
  },

  // ── Queries ───────────────────────────────────────────────────

  async findAll(filters: RegistrationFilters): Promise<Registration[]> {
    const { eventId, sportId, organizationId, status, role, gender, search, page = 1, limit = 20 } = filters;

    // Athletes query
    const athleteWhere = {
      ...(eventId ? { eventsID: eventId } : {}),
      ...(sportId ? { sportsID: sportId } : {}),
      ...(organizationId ? { organizationID: organizationId } : {}),
      athletes: {
        enroll: {
          ...(gender ? { gender } : {}),
          ...(search ? {
            OR: [
              { name: { contains: search, mode: 'insensitive' as const } },
            ],
          } : {}),
        },
      },
    };

    const [athletes, leaders] = await Promise.all([
      role !== 'Leader'
        ? prisma.athleteParticipat.findMany({
            where: athleteWhere,
            include: { athletes: { include: { enroll: true } }, events: true, sports: true, organization: true, categories: true },
            skip: (page - 1) * limit,
            take: limit,
          })
        : Promise.resolve([]),
      role !== 'Athlete'
        ? prisma.leaderParticipat.findMany({
            where: {
              ...(eventId ? { eventsID: eventId } : {}),
              ...(sportId ? { sportsID: sportId } : {}),
              ...(organizationId ? { organizationID: organizationId } : {}),
            },
            include: { leaders: { include: { enroll: true } }, events: true, sports: true, organization: true },
            skip: (page - 1) * limit,
            take: limit,
          })
        : Promise.resolve([]),
    ]);

    // Map to unified Registration shape
    const athleteRegistrations: Registration[] = athletes.map((ap: any) => ({
      enrollId: ap.athletes.enroll.id,
      name: ap.athletes.enroll.name,
      gender: ap.athletes.enroll.gender as any,
      nationality: ap.athletes.enroll.nationality,
      dob: ap.athletes.enroll.dob,
      idDocType: ap.athletes.enroll.idDocType as any,
      photoPath: ap.athletes.enroll.photoPath,
      documentsPath: ap.athletes.enroll.DocumentsPath,
      role: 'Athlete',
      status: 'pending', // extend with status field when added to schema
      athleteClass: ap.athletes.class,
      athleteCategory: ap.athletes.enroll.gender as any,
      leaderRole: null,
      phoneNumber: null,
      eventId: ap.eventsID,
      sportId: ap.sportsID,
      categoryId: ap.categoriesID,
      organizationId: ap.organizationID,
      createdAt: ap.createdAt,
    }));

    const leaderRegistrations: Registration[] = leaders.map((lp: any) => ({
      enrollId: lp.leaders.enroll.id,
      name: lp.leaders.enroll.name,
      gender: lp.leaders.enroll.gender as any,
      nationality: lp.leaders.enroll.nationality,
      dob: lp.leaders.enroll.dob,
      idDocType: lp.leaders.enroll.idDocType as any,
      photoPath: lp.leaders.enroll.photoPath,
      documentsPath: lp.leaders.enroll.DocumentsPath,
      role: 'Leader',
      status: 'pending',
      athleteClass: null,
      athleteCategory: null,
      leaderRole: lp.leaders.roles as any,
      phoneNumber: lp.leaders.phoneNumber,
      eventId: lp.eventsID,
      sportId: lp.sportsID,
      categoryId: null,
      organizationId: lp.organizationID,
      createdAt: lp.createdAt,
    }));

    return [...athleteRegistrations, ...leaderRegistrations]
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  },

  async count(filters: RegistrationFilters): Promise<number> {
    const { eventId, sportId, organizationId, role } = filters;
    const baseWhere = {
      ...(eventId ? { eventsID: eventId } : {}),
      ...(sportId ? { sportsID: sportId } : {}),
      ...(organizationId ? { organizationID: organizationId } : {}),
    };

    const [athletes, leaders] = await Promise.all([
      role !== 'Leader' ? prisma.athleteParticipat.count({ where: baseWhere }) : 0,
      role !== 'Athlete' ? prisma.leaderParticipat.count({ where: baseWhere }) : 0,
    ]);

    return athletes + leaders;
  },
};
