import type { ExtendedPrismaClient } from '@/infrastructure/db/prisma';

import type { EventFilters, CreateEventInput, UpdateEventInput } from './events.types';
import { toPrismaSkipTake } from '@/lib/utils/transformers';

export class EventsRepository {
  constructor(private db: ExtendedPrismaClient) {}
  async findMany(filters: EventFilters = {}) {
    const { search, isActive, ...pagination } = filters;
    const where = {
      ...(search ? { name: { contains: search, mode: 'insensitive' as const } } : {}),
      ...(isActive !== undefined ? { isActive } : {}),
    };
    const [data, total] = await Promise.all([
      this.db.events.findMany({
        where,
        ...toPrismaSkipTake(pagination),
        orderBy: { createdAt: 'desc' },
      }),
      this.db.events.count({ where }),
    ]);
    return { data, total };
  }
  findById(id: string) {
    return this.db.events.findUnique({ where: { id: Number(id) } });
  }
  create(input: CreateEventInput) {
    return this.db.events.create({ data: input });
  }
  update(id: string, input: UpdateEventInput) {
    return this.db.events.update({ where: { id: Number(id) }, data: input });
  }
  delete(id: string) {
    return this.db.events.delete({ where: { id: Number(id) } });
  }
}
