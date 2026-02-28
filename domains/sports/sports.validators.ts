// ============================================================
// domains/sports/sports.validators.ts
// ============================================================

import { z } from 'zod';

export const createSportSchema = z.object({
  name: z.string().trim().min(1, 'ត្រូវបញ្ចូលឈ្មោះកីឡា'),
});

export const updateSportSchema = z.object({
  id: z.number().int().positive(),
  name: z.string().trim().min(1, 'ត្រូវបញ្ចូលឈ្មោះកីឡា'),
});

export const sportFiltersSchema = z.object({
  search: z.string().optional(),
  eventId: z.coerce.number().int().positive().optional(),
  page: z.coerce.number().int().min(1).optional().default(1),
  limit: z.coerce.number().int().min(1).max(100).optional().default(20),
});

export type CreateSportData = z.infer<typeof createSportSchema>;
export type UpdateSportData = z.infer<typeof updateSportSchema>;
