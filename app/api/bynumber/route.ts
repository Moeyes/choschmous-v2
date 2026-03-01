import { NextRequest } from 'next/server';
import { ok, created, handleError } from '@/lib/api/response';
import { z } from 'zod';

const BACKEND_URL = (process.env.BACKEND_API_BASE_URL ?? 'http://127.0.0.1:8000').replace(
  /\/$/,
  ''
);
const API = `${BACKEND_URL}/api`;

const byNumberSchema = z.object({
  sportsEventOrgId: z.number().int().positive(),
  maleCount: z.number().int().min(0),
  femaleCount: z.number().int().min(0),
});

export async function POST(req: NextRequest) {
  try {
    const body = byNumberSchema.parse(await req.json());

    const res = await fetch(`${API}/participation-per-sport/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sports_Events_id: body.sportsEventOrgId, // FK → sports_event_org.id
        male_count: body.maleCount,
        female_count: body.femaleCount,
      }),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({ detail: 'Backend error' }));
      throw new Error(err.detail ?? `Backend ${res.status}`);
    }

    return created(await res.json());
  } catch (e) {
    return handleError(e);
  }
}

export async function GET(req: NextRequest) {
  try {
    const eventId = req.nextUrl.searchParams.get('eventId');
    const orgId = req.nextUrl.searchParams.get('organizationId');
    const params = new URLSearchParams({ skip: '0', limit: '100' });
    if (eventId) params.set('events_id', eventId);
    if (orgId) params.set('organization_id', orgId);
    const res = await fetch(`${API}/participation-per-sport/?${params}`);
    if (!res.ok) throw new Error('Failed to fetch');
    return ok(await res.json());
  } catch (e) {
    return handleError(e);
  }
}
