import { NextRequest } from 'next/server';
import { surveysService } from '@/domains/surveys';
import { created, handleError } from '@/lib/api/response';

export async function POST(req: NextRequest) {
  try {
    return created(await surveysService.submit(await req.json()));
  } catch (e) {
    return handleError(e);
  }
}
