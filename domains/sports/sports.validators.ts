// ============================================================
// domains/sports/sports.validators.ts
// Matches backend SportCreate { name_kh, sport_type }
// ============================================================

import { z } from 'zod';

export const createSportSchema = z.object({
  name_kh: z.string().trim().min(1, 'ត្រូវបញ្ចូលឈ្មោះកីឡា'),
  sport_type: z.string().trim().min(1, 'ត្រូវបញ្ចូលប្រភេទកីឡា'),
});

export const updateSportSchema = z.object({
  id: z.number().int().positive(),
  name_kh: z.string().trim().min(1, 'ត្រូវបញ្ចូលឈ្មោះកីឡា').optional(),
  sport_type: z.string().trim().min(1).optional(),
});

export const sportFiltersSchema = z.object({
  search: z.string().optional(),
  eventId: z.coerce.number().int().positive().optional(),
  page: z.coerce.number().int().min(1).optional().default(1),
  limit: z.coerce.number().int().min(1).max(100).optional().default(20),
});

export type CreateSportData = z.infer<typeof createSportSchema>;
export type UpdateSportData = z.infer<typeof updateSportSchema>;
