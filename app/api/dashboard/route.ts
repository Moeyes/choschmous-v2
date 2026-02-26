import { requireSession } from '@/infrastructure/session';
import { prisma } from '@/infrastructure/db';
import { ok, handleError } from '@/lib/api/response';

export async function GET() {
  try {
    await requireSession();
    const [events, sports, participants, registrations] = await Promise.all([
      prisma.events.count(), prisma.sports.count(), prisma.athleteParticipat.count(), prisma.athleteParticipat.count(),
    ]);
    return ok({ events, sports, participants, registrations });
  } catch (e) { return handleError(e); }
}
