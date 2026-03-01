// ============================================================
// domains/events/events.repository.ts
// Calls FastAPI backend — no Prisma
// ============================================================

import type { EventFilters, CreateEventInput, UpdateEventInput } from './events.types';

const BACKEND_URL = (process.env.BACKEND_API_BASE_URL ?? 'http://127.0.0.1:8000').replace(
  /\/+$/,
  ''
);
const API = `${BACKEND_URL}/api`;

// Maps raw FastAPI EventPublic → internal Event shape
function mapEvent(e: any) {
  return {
    id: e.id,
    name: e.name_kh ?? '',
    type: e.type ?? '',
    createdAt: e.created_at ?? '',
  };
}

export class EventsRepository {
  async findMany(filters: EventFilters = {}) {
    const { page = 1, limit = 20 } = filters;
    const skip = (page - 1) * limit;

    const res = await fetch(`${API}/events/?skip=${skip}&limit=${limit}`);
    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      throw new Error(`Backend ${res.status}: ${JSON.stringify(body)}`);
    }

    const json = await res.json();
    return {
      data: (json.data ?? []).map(mapEvent),
      total: json.count ?? 0,
    };
  }

  async findById(id: string) {
    const res = await fetch(`${API}/events/${id}`);
    if (!res.ok) return null;
    const e = await res.json();
    return mapEvent(e);
  }

  async create(input: CreateEventInput) {
    // Backend expects { name_kh, type } — send as-is
    const res = await fetch(`${API}/events/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ detail: 'Failed to create event' }));
      throw new Error(err.detail ?? 'Failed to create event');
    }
    return mapEvent(await res.json());
  }

  async update(id: string, input: UpdateEventInput) {
    // Backend uses PATCH, not PUT
    const res = await fetch(`${API}/events/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ detail: 'Failed to update event' }));
      throw new Error(err.detail ?? 'Failed to update event');
    }
    return mapEvent(await res.json());
  }

  async delete(id: string) {
    const res = await fetch(`${API}/events/${id}`, { method: 'DELETE' });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ detail: 'Failed to delete event' }));
      throw new Error(err.detail ?? 'Failed to delete event');
    }
  }
}
