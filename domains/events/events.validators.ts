import { z } from 'zod';
import { requiredString, optionalString, dateSchema, baseFiltersSchema } from '@/lib/validation/base-validators';
export const createEventSchema  = z.object({ name: requiredString, nameKh: optionalString, description: optionalString, startDate: dateSchema.optional(), endDate: dateSchema.optional(), location: optionalString, isActive: z.boolean().default(true) });
export const updateEventSchema  = createEventSchema.partial();
export const eventFiltersSchema = baseFiltersSchema.extend({ isActive: z.coerce.boolean().optional() });
