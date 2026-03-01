// ============================================================
// domains/events/events.types.ts
// Matches backend: Events table + EventCreate/EventPublic schemas
// ============================================================

// Backend eventType enum values (from enumdata.py)
export enum EventType {
  NATIONAL = 'កីឡាជាតិ',
  UNIVERSITY = 'កីឡាឧត្តមសិក្សា និងមធ្យមសិក្សា​បចេ្ចកទេសថ្នាក់ជាតិថ្នាក់ជាតិ',
  HIGH_SCHOOL = 'សិស្សមធ្យមសិក្សា​ថ្នាក់ជាតិ',
  PRIMARY_SCHOOL = 'កីឡាសិស្សបថមសិក្សាជាតិ',
}

export type EventStatus = 'upcoming' | 'ongoing' | 'completed';

/** Maps to: Events table (id, name_kh, type, created_at) */
export interface Event {
  id: number;
  name: string; // mapped from name_kh
  type: EventType; // mapped from type (eventType enum)
  createdAt: string; // ISO string from backend
}

/** Maps to: categories table (join of Events × Sports) */
export interface Category {
  id: number;
  eventsId: number; // FK → Events.id
  sportsId: number; // FK → Sports.id
  category: string;
  createdAt: string;
}

// ── DTOs ──────────────────────────────────────────────────────

/** Backend EventCreate: { name_kh: str, type: eventType } */
export interface CreateEventInput {
  name_kh: string;
  type: EventType;
}

/** Backend EventUpdate: { name_kh?: str, type?: eventType } */
export interface UpdateEventInput {
  name_kh?: string;
  type?: EventType;
}

/** Event enriched with related category/sport data for display */
export interface EventSummary {
  id: number;
  name: string;
  type: EventType;
  status: EventStatus;
  sports: EventSportEntry[];
  createdAt: string;
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
}
