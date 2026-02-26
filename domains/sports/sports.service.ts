
import { sportsRepository } from './sports.repository';
import { createSportSchema, updateSportSchema } from './sports.validators';
import type { Sport, SportFilters, CreateSportInput, UpdateSportInput } from './sports.types';

export const sportsService = {

  async getAll(filters: SportFilters = {}): Promise<{ data: Sport[]; total: number }> {
    const [data, total] = await Promise.all([
      sportsRepository.findAll(filters),
      sportsRepository.count(filters),
    ]);
    return { data, total };
  },

  async getById(id: number): Promise<Sport> {
    const sport = await sportsRepository.findById(id);
    if (!sport) throw new Error(`Sport ${id} not found`);
    return sport;
  },

  async getByEvent(eventId: number): Promise<Sport[]> {
    return sportsRepository.findByEventId(eventId);
  },

  async create(input: CreateSportInput): Promise<Sport> {
    const parsed = createSportSchema.parse(input);
    return sportsRepository.create({ name: parsed.name });
  },

  async update(input: UpdateSportInput): Promise<Sport> {
    const parsed = updateSportSchema.parse(input);
    await sportsService.getById(parsed.id); // ensures it exists
    return sportsRepository.update(parsed.id, { name: parsed.name });
  },

  async remove(id: number): Promise<void> {
    await sportsService.getById(id); // ensures it exists
    await sportsRepository.delete(id);
  },
};
