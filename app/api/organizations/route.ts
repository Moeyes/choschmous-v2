// app/api/organizations/route.ts
// Proxies to FastAPI backend — no Prisma

import { NextRequest } from 'next/server';
import { ok, handleError } from '@/lib/api/response';

const BACKEND_URL = process.env.BACKEND_URL ?? 'http://localhost:8000';
const API = `${BACKEND_URL}/api`;

function mapOrg(e: any) {
  return {
    id: e.id,
    name: e.name_kh ?? e.name ?? '',
    type: e.type ?? '',
    code: e.code ?? null,
  };
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl;
    const limit = searchParams.get('limit') ?? '100';
    const skip = searchParams.get('skip') ?? '0';

    const res = await fetch(`${API}/organizations/?skip=${skip}&limit=${limit}`);
    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      throw new Error(`Backend ${res.status}: ${JSON.stringify(body)}`);
    }

    const json = await res.json();
    const data = (json.data ?? []).map(mapOrg);
    return ok(data, { total: json.count ?? data.length });
  } catch (e) {
    return handleError(e);
  }
}
