import { PrismaClient } from '@prisma/client';
import type { ProvinceFilters, CreateProvinceInput, UpdateProvinceInput } from './provinces.types';
import { toPrismaSkipTake } from '@/lib/utils/transformers';

export class ProvincesRepository {
  constructor(private db: PrismaClient) {}
  async findMany(filters: ProvinceFilters = {}) {
    const { search, ...pagination } = filters;
    const where = search ? { name: { contains: search, mode: 'insensitive' as const } } : {};
    const [data, total] = await Promise.all([
      this.db.province.findMany({
        where,
        ...toPrismaSkipTake(pagination),
        orderBy: { name: 'asc' },
      }),
      this.db.province.count({ where }),
    ]);
    return { data, total };
  }
  findById(id: string) {
    return this.db.province.findUnique({ where: { id } });
  }
  create(input: CreateProvinceInput) {
    return this.db.province.create({ data: input });
  }
  update(id: string, input: UpdateProvinceInput) {
    return this.db.province.update({ where: { id }, data: input });
  }
  delete(id: string) {
    return this.db.province.delete({ where: { id } });
  }
}
