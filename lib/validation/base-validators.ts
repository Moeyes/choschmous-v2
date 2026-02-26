import { z } from 'zod';
export const idSchema        = z.string().cuid();
export const paginationSchema = z.object({ page: z.coerce.number().int().min(1).default(1), pageSize: z.coerce.number().int().min(1).max(100).default(20) });
export const searchSchema    = z.object({ search: z.string().optional() });
export const baseFiltersSchema = paginationSchema.merge(searchSchema);
export const dateSchema      = z.coerce.date();
export const optionalString  = z.string().trim().optional();
export const requiredString  = z.string().trim().min(1, 'Required');
