// ============================================================
// domains/sports/sports.repository.ts
// All Prisma queries for the Sports domain
// ============================================================

import { prisma } from '@/infrastructure/db/prisma';
import type { Sport, SportEventOrg } from './sports.types';
import type { SportFilters } from './sports.types';

export const sportsRepository = {

  async findAll(filters: SportFilters = {}): Promise<Sport[]> {
    const { search, eventId, page = 1, limit = 20 } = filters;
    return prisma.sports.findMany({
      where: {
        ...(search ? { name: { contains: search, mode: 'insensitive' } } : {}),
        ...(eventId ? {
          Sports_event_org: { some: { events_id: eventId } }
        } : {}),
      },
      orderBy: { name: 'asc' },
      skip: (page - 1) * limit,
      take: limit,
    });
  },

  async findById(id: number): Promise<Sport | null> {
    return prisma.sports.findUnique({ where: { id } });
  },

  async findByEventId(eventId: number): Promise<Sport[]> {
    return prisma.sports.findMany({
      where: { Sports_event_org: { some: { events_id: eventId } } },
      orderBy: { name: 'asc' },
    });
  },

  async create(data: { name: string }): Promise<Sport> {
    return prisma.sports.create({ data });
  },

  async update(id: number, data: { name: string }): Promise<Sport> {
    return prisma.sports.update({ where: { id }, data });
  },

  async delete(id: number): Promise<void> {
    await prisma.sports.delete({ where: { id } });
  },

  async count(filters: SportFilters = {}): Promise<number> {
    const { search, eventId } = filters;
    return prisma.sports.count({
      where: {
        ...(search ? { name: { contains: search, mode: 'insensitive' } } : {}),
        ...(eventId ? {
          Sports_event_org: { some: { events_id: eventId } }
        } : {}),
      },
    });
  },

  // ── Sports_event_org ────────────────────────────────────────

  async linkToEventOrg(data: {
    eventsId: number;
    sportsId: number;
    organizationId: number;
  }): Promise<SportEventOrg> {
    return prisma.sports_event_org.create({
      data: {
        events_id: data.eventsId,
        sports_id: data.sportsId,
        organization_id: data.organizationId,
      },
    });
  },

  async unlinkFromEventOrg(id: number): Promise<void> {
    await prisma.sports_event_org.delete({ where: { id } });
  },
};
