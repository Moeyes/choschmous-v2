import { z } from 'zod';
import { requiredString, optionalString } from '@/lib/validation/base-validators';
export const createProvinceSchema = z.object({
  name: requiredString,
  nameKh: optionalString,
  code: optionalString,
});
export const updateProvinceSchema = createProvinceSchema.partial();
