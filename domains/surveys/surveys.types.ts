// ============================================================
// domains/surveys/surveys.types.ts
// Surveys capture pre-registration sport participant estimates
// per organization — used before actual registrations are made
// ============================================================

export interface SurveyParticipants {
  male: number;
  female: number;
}

export interface SurveySportEntry {
  sportId: string;
  participants: SurveyParticipants;
}

/** Full survey submission from one organization */
export interface Survey {
  id?: string;
  organizationId: string;
  eventId?: string | null;
  sports: SurveySportEntry[];
  submittedAt?: Date;
}

// ── DTOs ──────────────────────────────────────────────────────

export interface CreateSurveyInput {
  organizationId: string;
  eventId?: string | null;
  sports: SurveySportEntry[];
}

/** Aggregated survey stats for a given event */
export interface SurveyStats {
  eventId: string;
  totalMale: number;
  totalFemale: number;
  totalParticipants: number;
  bySport: {
    sportId: string;
    sportName: string;
    male: number;
    female: number;
  }[];
  byOrganization: {
    organizationId: string;
    organizationName: string;
    totalParticipants: number;
  }[];
}
