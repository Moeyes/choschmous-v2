import { SportsRepository } from './sports.repository';
import type { SportFilters, CreateSportInput, UpdateSportInput } from './sports.types';
import { createSportSchema, updateSportSchema } from './sports.validators';
import { NotFoundError } from '@/lib/api/errors';
import { toPageMeta } from '@/lib/utils/transformers';

export class SportsService {
  constructor(private repo: SportsRepository) {}
  async list(filters: SportFilters) {
    const { data, total } = await this.repo.findMany(filters);
    return { data, meta: toPageMeta(total, filters) };
  }
  async getById(id: string) {
    const s = await this.repo.findById(id);
    if (!s) throw new NotFoundError('Sport');
    return s;
  }
  async create(input: CreateSportInput) {
    return this.repo.create(createSportSchema.parse(input));
  }
  async update(id: string, input: UpdateSportInput) {
    await this.getById(id);
    return this.repo.update(id, updateSportSchema.parse(input));
  }
  async delete(id: string) {
    await this.getById(id);
    return this.repo.delete(id);
  }
}
