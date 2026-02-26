import { ProvincesRepository } from './provinces.repository';
import type { ProvinceFilters, CreateProvinceInput, UpdateProvinceInput } from './provinces.types';
import { createProvinceSchema, updateProvinceSchema } from './provinces.validators';
import { NotFoundError } from '@/lib/api/errors';
import { toPageMeta } from '@/lib/utils/transformers';

export class ProvincesService {
  constructor(private repo: ProvincesRepository) {}
  async list(filters: ProvinceFilters) { const { data, total } = await this.repo.findMany(filters); return { data, meta: toPageMeta(total, filters) }; }
  async getById(id: string)            { const p = await this.repo.findById(id); if (!p) throw new NotFoundError('Province'); return p; }
  async create(input: CreateProvinceInput) { return this.repo.create(createProvinceSchema.parse(input)); }
  async update(id: string, input: UpdateProvinceInput) { await this.getById(id); return this.repo.update(id, updateProvinceSchema.parse(input)); }
  async delete(id: string) { await this.getById(id); return this.repo.delete(id); }
}
