import { EventsRepository } from './events.repository';
import type { EventFilters, CreateEventInput, UpdateEventInput } from './events.types';
import { createEventSchema, updateEventSchema } from './events.validators';
import { NotFoundError } from '@/lib/api/errors';
import { toPageMeta } from '@/lib/utils/transformers';

export class EventsService {
  constructor(private repo: EventsRepository) {}

  async list(filters: EventFilters) {
    const { data, total } = await this.repo.findMany(filters);
    return { data, meta: toPageMeta(total, filters) };
  }

  async getById(id: string) {
    const e = await this.repo.findById(id);
    if (!e) throw new NotFoundError('Event');
    return e;
  }

  async create(input: CreateEventInput) {
    return this.repo.create(createEventSchema.parse(input));
  }

  async update(id: string, input: UpdateEventInput) {
    await this.getById(id);
    return this.repo.update(id, updateEventSchema.parse(input));
  }

  async delete(id: string) {
    await this.getById(id);
    return this.repo.delete(id);
  }
}