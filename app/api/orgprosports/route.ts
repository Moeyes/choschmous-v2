import { NextRequest } from 'next/server';
import { ok, handleError } from '@/lib/api/response';

const BACKEND_URL = (process.env.BACKEND_API_BASE_URL ?? 'http://127.0.0.1:8000').replace(
  /\/$/,
  ''
);
const API = `${BACKEND_URL}/api`;

export async function GET(req: NextRequest) {
  try {
    const eventsId = req.nextUrl.searchParams.get('events_id');
    const orgId = req.nextUrl.searchParams.get('organization_id');

    // Fetch links + ALL sports in parallel (2 requests instead of N+1)
    const [linksRes, sportsRes] = await Promise.all([
      fetch(`${API}/org-sports/links?skip=0&limit=500`),
      fetch(`${API}/sports/?skip=0&limit=500`),
    ]);
    if (!linksRes.ok) throw new Error('Failed to fetch org sports links');

    const linksJson = await linksRes.json();
    let items: any[] = linksJson.data ?? linksJson ?? [];

    // Filter by event and org
    if (eventsId) items = items.filter((i: any) => String(i.events_id) === eventsId);
    if (orgId) items = items.filter((i: any) => String(i.organization_id) === orgId);

    // Build sport name lookup from the bulk fetch (0 extra requests)
    const sportMap: Record<number, string> = {};
    if (sportsRes.ok) {
      const sportsJson = await sportsRes.json();
      for (const s of sportsJson.data ?? []) {
        sportMap[s.id] = s.name_kh ?? `Sport ${s.id}`;
      }
    }

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
