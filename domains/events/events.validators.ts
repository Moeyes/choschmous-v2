// ============================================================
// domains/events/events.validators.ts
// ============================================================

import { z } from 'zod';

export const createEventSchema = z.object({
  name: z.string().trim().min(1, 'ត្រូវបញ្ចូលឈ្មោះព្រឹត្តិការណ៍'),
  date: z.string().refine((val) => !isNaN(new Date(val).getTime()), 'ថ្ងៃខែឆ្នាំមិនត្រឹមត្រូវ'),
});

export const updateEventSchema = z.object({
  id: z.number().int().positive(),
  name: z.string().trim().min(1).optional(),
  date: z.string().refine((val) => !isNaN(new Date(val).getTime()), 'ថ្ងៃខែឆ្នាំមិនត្រឹមត្រូវ').optional(),
});

export const eventFiltersSchema = z.object({
  status: z.enum(['upcoming', 'ongoing', 'completed']).optional(),
  search: z.string().optional(),
  page: z.coerce.number().int().min(1).optional().default(1),
  limit: z.coerce.number().int().min(1).max(100).optional().default(20),
});

export type CreateEventData = z.infer<typeof createEventSchema>;
export type UpdateEventData = z.infer<typeof updateEventSchema>;
