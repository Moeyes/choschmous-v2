import { NextRequest } from 'next/server';
import { SportsService } from '@/domains/sports';
import { SportsRepository } from '@/domains/sports/sports.repository';
import { sportFiltersSchema } from '@/domains/sports/sports.validators';
import { prisma } from '@/infrastructure/db';
import { ok, created, handleError } from '@/lib/api/response';

const service = new SportsService(new SportsRepository(prisma));
export async function GET(req: NextRequest) { try { const r = await service.list(sportFiltersSchema.parse(Object.fromEntries(req.nextUrl.searchParams))); return ok(r.data, r.meta); } catch (e) { return handleError(e); } }
export async function POST(req: NextRequest) { try { return created(await service.create(await req.json())); } catch (e) { return handleError(e); } }
