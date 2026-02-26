import { NextRequest } from 'next/server';
import { EventsService } from '@/domains/events';
import { EventsRepository } from '@/domains/events/events.repository';
import { eventFiltersSchema } from '@/domains/events/events.validators';
import { prisma } from '@/infrastructure/db';
import { ok, created, handleError } from '@/lib/api/response';

const service = new EventsService(new EventsRepository(prisma));

export async function GET(req: NextRequest) {
  try {
    const r = await service.list(
      eventFiltersSchema.parse(Object.fromEntries(req.nextUrl.searchParams))
    );
    return ok(r.data, r.meta);
  } catch (e) {
    return handleError(e);
  }
}
export async function POST(req: NextRequest) {
  try {
    return created(await service.create(await req.json()));
  } catch (e) {
    return handleError(e);
  }
}
