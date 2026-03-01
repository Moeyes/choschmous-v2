// ============================================================
// domains/sports/sports.repository.ts
// Calls FastAPI backend — no Prisma
// ============================================================

import type { Sport, SportEventOrg, SportFilters } from './sports.types';

const BACKEND_URL = (process.env.BACKEND_API_BASE_URL ?? 'http://127.0.0.1:8000').replace(
  /\/+$/,
  ''
);
const API = `${BACKEND_URL}/api`;

export const sportsRepository = {
  async findAll(filters: SportFilters = {}): Promise<Sport[]> {
    const { page = 1, limit = 20 } = filters;
    const skip = (page - 1) * limit;

    const res = await fetch(`${API}/sports/?skip=${skip}&limit=${limit}`);
    if (!res.ok) throw new Error('Failed to fetch sports');

    const json = await res.json();
    return (json.data ?? []).map((s: any) => ({
      id: s.id,
      name: s.name_kh ?? '',
      sportType: s.sport_type ?? null,
      createdAt: s.created_at ?? '',
    }));
  },

  async findById(id: number): Promise<Sport | null> {
    const res = await fetch(`${API}/sports/${id}`);
    if (!res.ok) return null;
    const s = await res.json();
    return {
      id: s.id,
      name: s.name_kh ?? '',
      sportType: s.sport_type ?? null,
      createdAt: s.created_at ?? '',
    };
  },

  async findByEventId(eventId: number): Promise<Sport[]> {
    // Fetch links + all sports in parallel (2 requests, no N+1)
    const [linksRes, sportsRes] = await Promise.all([
      fetch(`${API}/org-sports/links?skip=0&limit=500`),
      fetch(`${API}/sports/?skip=0&limit=500`),
    ]);
    if (!linksRes.ok) throw new Error('Failed to fetch sports by event');
    const linksJson = await linksRes.json();
    const matchingIds = new Set(
      (linksJson.data ?? [])
        .filter((l: any) => l.events_id === eventId)
        .map((l: any) => l.sports_id)
    );
    if (matchingIds.size === 0) return [];
    // Map from bulk sport list — no individual fetches
    const allSports = sportsRes.ok ? ((await sportsRes.json()).data ?? []) : [];
    return allSports
      .filter((s: any) => matchingIds.has(s.id))
      .map(
        (s: any): Sport => ({
          id: s.id,
          name: s.name_kh ?? '',
          sportType: s.sport_type ?? null,
          createdAt: s.created_at ?? '',
        })
      );
  },

  async create(data: { name_kh: string; sport_type: string }): Promise<Sport> {
    const res = await fetch(`${API}/sports`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ detail: 'Failed to create sport' }));
      throw new Error(err.detail ?? 'Failed to create sport');
    }
    const s = await res.json();
    return {
      id: s.id,
      name: s.name_kh ?? '',
      sportType: s.sport_type ?? null,
      createdAt: s.created_at ?? '',
    };
  },

  async update(id: number, data: { name_kh?: string; sport_type?: string }): Promise<Sport> {
    const res = await fetch(`${API}/sports/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ detail: 'Failed to update sport' }));
      throw new Error(err.detail ?? 'Failed to update sport');
    }
    const s = await res.json();
    return {
      id: s.id,
      name: s.name_kh ?? '',
      sportType: s.sport_type ?? null,
      createdAt: s.created_at ?? '',
    };
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
      createdAt: result.created_at ?? '',
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
