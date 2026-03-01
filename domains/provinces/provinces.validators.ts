import { z } from 'zod';
import { requiredString, optionalString } from '@/lib/validation/base-validators';

export const createProvinceSchema = z.object({
  name_kh: requiredString,
  type: requiredString, // 'province' | 'ministry'
  code: optionalString,
});

export const updateProvinceSchema = createProvinceSchema.partial();
