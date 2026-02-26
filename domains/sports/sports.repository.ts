import { PrismaClient } from '@prisma/client';
import type { SportFilters, CreateSportInput, UpdateSportInput } from './sports.types';
import { toPrismaSkipTake } from '@/lib/utils/transformers';

export class SportsRepository {
  constructor(private db: PrismaClient) {}
  async findMany(filters: SportFilters = {}) {
    const { search, eventId, ...pagination } = filters;
    const where = {
      ...(search ? { name: { contains: search, mode: 'insensitive' as const } } : {}),
      ...(eventId ? { eventId } : {}),
    };
    const [data, total] = await Promise.all([
      this.db.sport.findMany({ where, ...toPrismaSkipTake(pagination), orderBy: { name: 'asc' } }),
      this.db.sport.count({ where }),
    ]);
    return { data, total };
  }
  findById(id: string) {
    return this.db.sport.findUnique({ where: { id } });
  }
  create(input: CreateSportInput) {
    return this.db.sport.create({ data: input });
  }
  update(id: string, input: UpdateSportInput) {
    return this.db.sport.update({ where: { id }, data: input });
  }
  delete(id: string) {
    return this.db.sport.delete({ where: { id } });
  }
}
