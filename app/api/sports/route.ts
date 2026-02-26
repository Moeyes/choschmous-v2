import { NextRequest } from 'next/server';
import { sportsService } from '@/domains/sports';
import { sportFiltersSchema } from '@/domains/sports/sports.validators';
import { created, handleError, ok } from '@/lib/api/response';

export async function GET(req: NextRequest) {
  try {
    const filters = sportFiltersSchema.parse(Object.fromEntries(req.nextUrl.searchParams));
    const result = await sportsService.getAll(filters);
    return ok(result.data, { total: result.total });
  } catch (e) {
    return handleError(e);
  }
}

export async function POST(req: NextRequest) {
  try {
    return created(await sportsService.create(await req.json()));
  } catch (e) {
    return handleError(e);
  }
}
