// ============================================================
// domains/sports/sports.types.ts
// Derived from: Sports + Sports_event_org + categories tables
// ============================================================

/** Maps to: Sports table */
export interface Sport {
  id: number;
  name: string;
  createdAt: Date;
}

/**
 * Maps to: Sports_event_org table
 * Junction table linking Sports × Events × Organization
 */
export interface SportEventOrg {
  id: number;
  eventsId: number;       // FK → Events.id
  sportsId: number;       // FK → Sports.id
  organizationId: number; // FK → Organization.id
  createdAt: Date;
}

// ── DTOs ──────────────────────────────────────────────────────

export interface CreateSportInput {
  name: string;
}

export interface UpdateSportInput {
  id: number;
  name: string;
}

/** Sport enriched with participation counts for dashboard display */
export interface SportSummary {
  id: number;
  name: string;
  totalAthletes: number;
  totalLeaders: number;
  totalParticipants: number;
  categories: string[];
  createdAt: Date;
}

// ── Filters ───────────────────────────────────────────────────

export interface SportFilters {
  search?: string;
  eventId?: number;
  page?: number;
  limit?: number;
}
