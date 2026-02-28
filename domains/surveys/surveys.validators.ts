import { z } from 'zod';

export const surveySubmitSchema = z.object({
  eventId:        z.coerce.number().int().positive(),
  organizationId: z.coerce.number().int().positive(),
  sportIds:       z.array(z.coerce.number().int().positive()).min(1, 'សូមជ្រើសរើសកីឡាយ៉ាងហោចណាស់មួយ'),
});

export type SurveySubmitInput = z.infer<typeof surveySubmitSchema>;
