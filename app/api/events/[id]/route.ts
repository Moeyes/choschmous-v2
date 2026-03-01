import { NextRequest } from 'next/server';
import { EventsService } from '@/domains/events';
import { EventsRepository } from '@/domains/events/events.repository';
import { ok, handleError } from '@/lib/api/response';

const service = new EventsService(new EventsRepository());
type Ctx = { params: Promise<{ id: string }> };

export async function GET(_: NextRequest, { params }: Ctx) {
  try {
    return ok(await service.getById((await params).id));
  } catch (e) {
    return handleError(e);
  }
}
export async function PUT(req: NextRequest, { params }: Ctx) {
  try {
    return ok(await service.update((await params).id, await req.json()));
  } catch (e) {
    return handleError(e);
  }
}
export async function DELETE(_: NextRequest, { params }: Ctx) {
  try {
    return ok(await service.delete((await params).id));
  } catch (e) {
    return handleError(e);
  }
}
