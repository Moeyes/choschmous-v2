import { requireSession } from '@/infrastructure/session';
import { handleError, ok } from '@/lib/api/response';

const BACKEND_URL = process.env.BACKEND_URL ?? 'http://localhost:8000';
const API = `${BACKEND_URL}/api`;
const DEFAULT_LIMIT = 500;

type ListResponse<T> = {
  data?: T[];
  count?: number;
};

type BackendEvent = {
  id: number;
  name_kh?: string;
  type?: string;
  created_at?: string;
};

type BackendSport = {
  id: number;
  name_kh?: string;
  created_at?: string;
};

type BackendOrganization = {
  id: number;
  name_kh?: string;
  type?: string;
};

type Participation = {
  organization_id?: number | null;
};

async function fetchList<T>(path: string, limit = DEFAULT_LIMIT): Promise<ListResponse<T>> {
  const url = `${API}${path}${path.includes('?') ? '&' : '?'}skip=0&limit=${limit}`;
  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Dashboard backend request failed (${res.status}): ${body}`);
  }
  return (await res.json()) as ListResponse<T>;
}

export async function GET() {
  try {
    await requireSession();

    const [eventsRes, sportsRes, orgRes, athleteParticipationRes, leaderParticipationRes, enrollmentsRes] =
      await Promise.all([
        fetchList<BackendEvent>('/events/', 8),
        fetchList<BackendSport>('/sports/', 8),
        fetchList<BackendOrganization>('/organizations/', 1000),
        fetchList<Participation>('/athlete-participation/', 5000),
        fetchList<Participation>('/leader-participation/', 5000),
        fetchList<unknown>('/enrollments/', 1),
      ]);

    const events = eventsRes.data ?? [];
    const sports = sportsRes.data ?? [];
    const organizations = orgRes.data ?? [];
    const athleteParticipation = athleteParticipationRes.data ?? [];
    const leaderParticipation = leaderParticipationRes.data ?? [];

    const orgById = new Map(organizations.map((o) => [o.id, o]));
    const byOrganization = new Map<string, number>();

    for (const item of [...athleteParticipation, ...leaderParticipation]) {
      if (!item.organization_id) continue;
      const org = orgById.get(item.organization_id);
      if (!org) continue;
      const key = org.name_kh ?? `Organization ${org.id}`;
      byOrganization.set(key, (byOrganization.get(key) ?? 0) + 1);
    }

    const topOrganizations = [...byOrganization.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6)
      .map(([name, participants]) => ({ name, participants }));

    return ok({
      stats: {
        events: eventsRes.count ?? events.length,
        sports: sportsRes.count ?? sports.length,
        participants: (athleteParticipationRes.count ?? athleteParticipation.length) + (leaderParticipationRes.count ?? leaderParticipation.length),
        registrations: enrollmentsRes.count ?? 0,
        organizations: orgRes.count ?? organizations.length,
      },
      events: events.map((e) => ({
        id: e.id,
        name: e.name_kh ?? `Event ${e.id}`,
        type: e.type ?? '',
        createdAt: e.created_at ?? '',
      })),
      sports: sports.map((s) => ({
        id: s.id,
        name: s.name_kh ?? `Sport ${s.id}`,
        createdAt: s.created_at ?? '',
      })),
      topOrganizations,
    });
  } catch (e) {
    return handleError(e);
  }
}
