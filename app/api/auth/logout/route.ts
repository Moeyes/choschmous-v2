import { getSession } from '@/infrastructure/session';
import { ok } from '@/lib/api/response';
export async function POST() { const s = await getSession(); s.destroy(); return ok({ message: 'Logged out' }); }
