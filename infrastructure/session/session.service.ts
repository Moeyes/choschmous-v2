import { SessionOptions, getIronSession } from 'iron-session';
import { cookies } from 'next/headers';
import { SESSION_COOKIE_NAME, SESSION_MAX_AGE } from '@/config/constants';
import { Role } from '@/config/roles';

export type SessionData = { userId: string; email: string; role: Role; name?: string };

export const sessionOptions: SessionOptions = {
  password: process.env.SESSION_SECRET ?? 'change-this-secret-to-at-least-32-chars!!',
  cookieName: SESSION_COOKIE_NAME,
  cookieOptions: { secure: process.env.NODE_ENV === 'production', maxAge: SESSION_MAX_AGE },
};

export async function getSession() {
  const cookieStore = await cookies();
  return getIronSession<SessionData>(cookieStore, sessionOptions);
}

export async function requireSession(): Promise<SessionData> {
  const session = await getSession();
  if (!session.userId) throw new Error('Unauthorized');
  return session as SessionData;
}
