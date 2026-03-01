// ============================================================
// domains/events/events.validators.ts
// Matches backend EventCreate { name_kh, type } schema
// ============================================================

import { z } from 'zod';
import { EventType } from './events.types';

const eventTypeValues = Object.values(EventType) as [string, ...string[]];

export const createEventSchema = z.object({
  name_kh: z.string().trim().min(1, 'ត្រូវបញ្ចូលឈ្មោះព្រឹត្តិការណ៍'),
  type: z.enum(eventTypeValues, {
    message: 'ត្រូវជ្រើសរើសប្រភេទព្រឹត្តិការណ៍',
  }),
});

export const updateEventSchema = z.object({
  name_kh: z.string().trim().min(1).optional(),
  type: z.enum(eventTypeValues).optional(),
});

export const eventFiltersSchema = z.object({
  status: z.enum(['upcoming', 'ongoing', 'completed']).optional(),
  search: z.string().optional(),
  page: z.coerce.number().int().min(1).optional().default(1),
  limit: z.coerce.number().int().min(1).max(100).optional().default(20),
});

export type CreateEventData = z.infer<typeof createEventSchema>;
export type UpdateEventData = z.infer<typeof updateEventSchema>;
