// ============================================================
// domains/auth/auth.repository.ts
// Calls FastAPI backend directly — no Prisma for auth
// ============================================================

import type { BackendLoginResponse, LoginInput } from './auth.types';

const BACKEND_URL = process.env.BACKEND_URL ?? 'http://localhost:8000';

export class AuthRepository {
  async login(input: LoginInput): Promise<BackendLoginResponse> {
    const res = await fetch(`${BACKEND_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({ detail: 'Login failed' }));
      throw new Error(err.detail ?? 'Login failed');
    }

    return res.json() as Promise<BackendLoginResponse>;
  }

  async findUserById(id: string): Promise<BackendLoginResponse['user'] | null> {
    const res = await fetch(`${BACKEND_URL}/users/${id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!res.ok) return null;
    return res.json();
  }
}
