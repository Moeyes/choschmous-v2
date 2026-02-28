import { NextRequest } from 'next/server';
import { EventsService } from '@/domains/events';
import { EventsRepository } from '@/domains/events/events.repository';
import { ok, created, handleError } from '@/lib/api/response';
import { z } from 'zod';

const service = new EventsService(new EventsRepository());

const filtersSchema = z.object({
  page:   z.coerce.number().int().min(1).optional().default(1),
  limit:  z.coerce.number().int().min(1).max(500).optional().default(20),
  skip:   z.coerce.number().int().min(0).optional(),
  status: z.enum(['upcoming', 'ongoing', 'completed']).optional(),
  search: z.string().optional(),
});

export async function GET(req: NextRequest) {
  try {
    const p = filtersSchema.parse(Object.fromEntries(req.nextUrl.searchParams));
    // support ?skip= (used by survey UI) alongside ?page=
    if (p.skip !== undefined) {
      p.page = Math.floor(p.skip / p.limit) + 1;
    }
    const r = await service.list(p);
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
