import { NextRequest } from 'next/server';
import { ProvincesService } from '@/domains/provinces';
import { ProvincesRepository } from '@/domains/provinces/provinces.repository';
import { baseFiltersSchema } from '@/lib/validation/base-validators';
import { prisma } from '@/infrastructure/db';
import { ok, created, handleError } from '@/lib/api/response';

const service = new ProvincesService(new ProvincesRepository(prisma));
export async function GET(req: NextRequest) { try { const r = await service.list(baseFiltersSchema.parse(Object.fromEntries(req.nextUrl.searchParams))); return ok(r.data, r.meta); } catch (e) { return handleError(e); } }
export async function POST(req: NextRequest) { try { return created(await service.create(await req.json())); } catch (e) { return handleError(e); } }
