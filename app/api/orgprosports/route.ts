import { NextRequest } from 'next/server';
import { ok, handleError } from '@/lib/api/response';

const BACKEND_URL = process.env.BACKEND_URL ?? 'http://localhost:8000';
const API = `${BACKEND_URL}/api`;

export async function GET(req: NextRequest) {
  try {
    const eventsId = req.nextUrl.searchParams.get('events_id');
    const orgId = req.nextUrl.searchParams.get('organization_id');

    // Fetch all sports_event_org links with a high limit
    const res = await fetch(`${API}/org-sports/links?skip=0&limit=500`);
    if (!res.ok) throw new Error('Failed to fetch org sports links');
    const json = await res.json();

    let items: any[] = json.data ?? json ?? [];

    // Filter by event and org
    if (eventsId) items = items.filter((i: any) => String(i.events_id) === eventsId);
    if (orgId) items = items.filter((i: any) => String(i.organization_id) === orgId);

    // Fetch sport names for each unique sports_id
    const sportIds = [...new Set(items.map((i: any) => i.sports_id))] as number[];
    const sportMap: Record<number, string> = {};

    await Promise.all(
      sportIds.map(async (id) => {
        const r = await fetch(`${API}/sports/${id}`);
        if (r.ok) {
          const s = await r.json();
          sportMap[id] = s.name_kh ?? s.name ?? `Sport ${id}`;
        }
      })
    );

    // Attach sport_name to each item
    const enriched = items.map((i: any) => ({
      id: i.id,
      events_id: i.events_id,
      sports_id: i.sports_id,
      organization_id: i.organization_id,
      sport_name: sportMap[i.sports_id] ?? `Sport ${i.sports_id}`,
    }));

    return ok(enriched);
  } catch (e) {
    return handleError(e);
  }
}
