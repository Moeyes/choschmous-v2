import { surveysRepository } from './surveys.repository';
import { surveySubmitSchema, type SurveySubmitInput } from './surveys.validators';

export const surveysService = {
  async submit(input: SurveySubmitInput) {
    const parsed = surveySubmitSchema.parse(input);
    const { linksCreated } = await surveysRepository.submitLinks(parsed);
    return {
      success:        true,
      linksCreated,
      eventId:        parsed.eventId,
      organizationId: parsed.organizationId,
      sportIds:       parsed.sportIds,
    };
  },
};
