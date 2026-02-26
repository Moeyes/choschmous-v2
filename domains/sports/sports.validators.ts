import { z } from 'zod';
import {
  requiredString,
  optionalString,
  baseFiltersSchema,
} from '@/lib/validation/base-validators';
export const createSportSchema = z.object({
  name: requiredString,
  nameKh: optionalString,
  eventId: requiredString,
  maxTeamSize: z.number().int().min(1).default(1),
});
export const updateSportSchema = createSportSchema.omit({ eventId: true }).partial();
export const sportFiltersSchema = baseFiltersSchema.extend({ eventId: z.string().optional() });
