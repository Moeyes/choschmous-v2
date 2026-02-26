import { NextRequest } from 'next/server';
import { AuthService } from '@/domains/auth';
import { AuthRepository } from '@/domains/auth/auth.repository';
import { prisma } from '@/infrastructure/db';
import { getSession } from '@/infrastructure/session';
import { ok, handleError } from '@/lib/api/response';

const service = new AuthService(new AuthRepository(prisma));

export async function POST(req: NextRequest) {
  try {
    const user = await service.login(await req.json());
    const session = await getSession();
    session.userId = user.id; session.email = user.email;
    session.role = user.role; session.name = user.name ?? undefined;
    await session.save();
    return ok(user);
  } catch (e) { return handleError(e); }
}
