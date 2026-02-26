import { NextResponse } from 'next/server';
import { getSession } from '@/infrastructure/session';
import { ok, handleError } from '@/lib/api/response';
import { apiError } from '@/types/api';
export async function GET() {
  try {
    const s = await getSession();
    if (!s.userId) return NextResponse.json(apiError('No session'), { status: 401 });
    return ok({ userId: s.userId, email: s.email, role: s.role, name: s.name });
  } catch (e) { return handleError(e); }
}
