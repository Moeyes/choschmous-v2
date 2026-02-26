import { PrismaClient } from '@prisma/client';
import type { EventFilters, CreateEventInput, UpdateEventInput } from './events.types';
import { toPrismaSkipTake } from '@/lib/utils/transformers';

export class EventsRepository {
  constructor(private db: PrismaClient) {}
  async findMany(filters: EventFilters = {}) {
    const { search, isActive, ...pagination } = filters;
    const where = { ...(search ? { name: { contains: search, mode: 'insensitive' as const } } : {}), ...(isActive !== undefined ? { isActive } : {}) };
    const [data, total] = await Promise.all([
      this.db.event.findMany({ where, ...toPrismaSkipTake(pagination), orderBy: { createdAt: 'desc' } }),
      this.db.event.count({ where }),
    ]);
    return { data, total };
  }
  findById(id: string)                        { return this.db.event.findUnique({ where: { id }, include: { sports: true } }); }
  create(input: CreateEventInput)             { return this.db.event.create({ data: input }); }
  update(id: string, input: UpdateEventInput) { return this.db.event.update({ where: { id }, data: input }); }
  delete(id: string)                          { return this.db.event.delete({ where: { id } }); }
}
