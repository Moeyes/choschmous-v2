// ============================================================
// domains/events/events.types.ts
// Derived from: Events + categories tables in ER diagram
// ============================================================

export type EventStatus = 'upcoming' | 'ongoing' | 'completed';

/** Maps to: Events table */
export interface Event {
  id: number;
  name: string;
  date: Date;
  createdAt: Date;
}

/** Maps to: categories table (join of Events × Sports) */
export interface Category {
  id: number;
  eventsId: number;   // FK → Events.id
  sportsId: number;   // FK → Sports.id
  category: string;
  createdAt: Date;
}

// ── DTOs ──────────────────────────────────────────────────────

export interface CreateEventInput {
  name: string;
  date: string; // ISO date string from client
}

export interface UpdateEventInput {
  id: number;
  name?: string;
  date?: string;
}

/** Event enriched with related category/sport data for display */
export interface EventSummary {
  id: number;
  name: string;
  date: Date;
  status: EventStatus;
  sports: EventSportEntry[];
  createdAt: Date;
}

export interface EventSportEntry {
  sportId: number;
  sportName: string;
  categoryId: number;
  category: string;
}

// ── Filters ───────────────────────────────────────────────────

export interface EventFilters {
  status?: EventStatus;
  search?: string;
  page?: number;
  limit?: number;
  isActive?: boolean;
  take?: number;
}
