// ============================================================
// domains/sports/sports.repository.ts
// Calls FastAPI backend — no Prisma
// ============================================================

import type { Sport, SportEventOrg, SportFilters } from './sports.types';

const BACKEND_URL = process.env.BACKEND_URL ?? 'http://localhost:8000';
const API = `${BACKEND_URL}/api`;

export const sportsRepository = {
  async findAll(filters: SportFilters = {}): Promise<Sport[]> {
    const { page = 1, limit = 20 } = filters;
    const skip = (page - 1) * limit;

    const res = await fetch(`${API}/sports/?skip=${skip}&limit=${limit}`);
    if (!res.ok) throw new Error('Failed to fetch sports');

    const json = await res.json();
    return (json.data ?? []).map((s: any) => ({ id: s.id, name: s.name_kh ?? s.name ?? "", createdAt: s.created_at }));
  },

  async findById(id: number): Promise<Sport | null> {
    const res = await fetch(`${API}/sports/${id}`);
    if (!res.ok) return null;
    return res.json();
  },

  async findByEventId(eventId: number): Promise<Sport[]> {
    // Backend: GET /org-sports/links?skip=0&limit=100 then filter by events_id
    // Or fetch all sports and filter — adjust if backend adds query param support
    const res = await fetch(`${API}/org-sports/links?skip=0&limit=100`);
    if (!res.ok) throw new Error('Failed to fetch sports by event');
    const json = await res.json();
    const links: SportEventOrg[] = json.data.filter(
      (l: any) => l.events_id === eventId
    );
    // Fetch each unique sport
    const sportIds = [...new Set(links.map((l: any) => l.sports_id))];
    const sports = await Promise.all(sportIds.map((id) => this.findById(id as number)));
    return sports.filter(Boolean) as Sport[];
  },

  async create(data: { name: string }): Promise<Sport> {
    const res = await fetch(`${API}/sports`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ detail: 'Failed to create sport' }));
      throw new Error(err.detail ?? 'Failed to create sport');
    }
    return res.json();
  },

  async update(id: number, data: { name: string }): Promise<Sport> {
    const res = await fetch(`${API}/sports/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ detail: 'Failed to update sport' }));
      throw new Error(err.detail ?? 'Failed to update sport');
    }
    return res.json();
  },

  async delete(id: number): Promise<void> {
    const res = await fetch(`${API}/sports/${id}`, { method: 'DELETE' });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ detail: 'Failed to delete sport' }));
      throw new Error(err.detail ?? 'Failed to delete sport');
    }
  },

  async count(filters: SportFilters = {}): Promise<number> {
    const res = await fetch(`${API}/sports/?skip=0&limit=1`);
    if (!res.ok) throw new Error('Failed to count sports');
    const json = await res.json();
    return json.count;
  },

  async linkToEventOrg(data: {
    eventsId: number;
    sportsId: number;
    organizationId: number;
  }): Promise<SportEventOrg> {
    const res = await fetch(`${API}/org-sports/links`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        events_id: data.eventsId,
        sports_id: data.sportsId,
        organization_id: data.organizationId,
      }),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ detail: 'Failed to link sport' }));
      throw new Error(err.detail ?? 'Failed to link sport');
    }
    const result = await res.json();
    return {
      id: result.id,
      eventsId: result.events_id,
      sportsId: result.sports_id,
      organizationId: result.organization_id,
      createdAt: result.createdAt,
    };
  },

  async unlinkFromEventOrg(id: number): Promise<void> {
    const res = await fetch(`${API}/org-sports/links/${id}`, { method: 'DELETE' });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ detail: 'Failed to unlink sport' }));
      throw new Error(err.detail ?? 'Failed to unlink sport');
    }
  },
};
