// app/api/categories/route.ts
// Proxies to FastAPI backend — no Prisma

import { NextRequest } from 'next/server';
import { ok, handleError } from '@/lib/api/response';

const BACKEND_URL = process.env.BACKEND_URL ?? 'http://localhost:8000';
const API = `${BACKEND_URL}/api`;

function mapCategory(c: any) {
  return {
    id: c.id,
    name: c.name_kh ?? c.name ?? '',
  };
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl;
    const sportId = searchParams.get('sport_id') ?? '';
    const limit = searchParams.get('limit') ?? '100';
    const skip = searchParams.get('skip') ?? '0';

    const params = new URLSearchParams({ skip, limit });
    if (sportId) params.set('sport_id', sportId);

    const res = await fetch(`${API}/org-sports/categories/?${params}`);
    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      throw new Error(`Backend ${res.status}: ${JSON.stringify(body)}`);
    }

    const json = await res.json();
    const data = (json.data ?? []).map(mapCategory);
    return ok(data, { total: json.count ?? data.length });
  } catch (e) {
    return handleError(e);
  }
}
