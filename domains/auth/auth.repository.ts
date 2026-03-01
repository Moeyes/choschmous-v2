// ============================================================
// domains/auth/auth.repository.ts
// Calls FastAPI backend directly — no Prisma for auth
// ============================================================

import type { BackendLoginResponse, BackendUser, LoginInput } from './auth.types';

const BACKEND_URL = (process.env.BACKEND_API_BASE_URL ?? 'http://127.0.0.1:8000').replace(
  /\/+$/,
  ''
);
const API = `${BACKEND_URL}/api`;

export class AuthRepository {
  async login(input: LoginInput): Promise<{ tokens: BackendLoginResponse; user: BackendUser }> {
    // Step 1: Authenticate and get tokens
    const res = await fetch(`${API}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({ detail: 'Login failed' }));
      throw new Error(err.detail ?? 'Login failed');
    }

    const tokens = (await res.json()) as BackendLoginResponse;

    // Step 2: Decode JWT to get user ID, then fetch user details
    const payload = JSON.parse(atob(tokens.access_token.split('.')[1]));
    const userId = payload.sub;

    const user = await this.findUserById(userId);
    if (!user) throw new Error('User not found after login');

    return { tokens, user };
  }

  async findUserById(id: string): Promise<BackendUser | null> {
    const res = await fetch(`${API}/users/${id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!res.ok) return null;
    return res.json();
  }
}
