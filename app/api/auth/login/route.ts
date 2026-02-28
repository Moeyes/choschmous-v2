// ============================================================
// app/api/auth/login/route.ts
// Receives login from frontend → calls AuthService → calls FastAPI
// ============================================================

import { NextRequest } from 'next/server';
import { AuthService } from '@/domains/auth';
import { AuthRepository } from '@/domains/auth/auth.repository';
import { getSession } from '@/infrastructure/session';
import { ok, handleError } from '@/lib/api/response';

// AuthRepository now calls FastAPI — no Prisma needed here
const service = new AuthService(new AuthRepository());

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const user = await service.login(body);

    const session = await getSession();
    session.userId = user.id;
    session.email = user.email;
    session.role = user.role;
    session.name = user.name;
    await session.save();

    return ok(user);
  } catch (e) {
    return handleError(e);
  }
}
