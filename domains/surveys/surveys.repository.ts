import type { SurveySubmitInput } from './surveys.validators';

const BACKEND_URL = process.env.BACKEND_URL ?? 'http://localhost:8000'\;
const API = `${BACKEND_URL}/api`;

export const surveysRepository = {
  async submitLinks(input: SurveySubmitInput): Promise<{ linksCreated: number }> {
    const results = await Promise.all(
      input.sportIds.map(async (sportId) => {
        const res = await fetch(`${API}/org-sports/links/`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            events_id:       input.eventId,
            sports_id:       sportId,
            organization_id: input.organizationId,
          }),
        });
        if (!res.ok) {
          const err = await res.json().catch(() => ({ detail: 'Failed to create link' }));
          throw new Error(err.detail ?? `Backend ${res.status}: failed to link sport ${sportId}`);
        }
        return res.json();
      })
    );
    return { linksCreated: results.length };
  },
};
