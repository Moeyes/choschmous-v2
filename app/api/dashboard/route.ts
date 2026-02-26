import { requireSession } from '@/infrastructure/session';
import { prisma } from '@/infrastructure/db';
import { ok, handleError } from '@/lib/api/response';

export async function GET() {
  try {
    await requireSession();
    const [events, sports, participants, registrations] = await Promise.all([
      prisma.event.count(), prisma.sport.count(), prisma.participant.count(), prisma.registration.count(),
    ]);
    return ok({ events, sports, participants, registrations });
  } catch (e) { return handleError(e); }
}
