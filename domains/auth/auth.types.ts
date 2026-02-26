// ============================================================
// domains/auth/auth.types.ts
// Derived from: Users table in ER diagram
// ============================================================

export type UserLevel = 0 | 1 | 2; // 0 = public, 1 = admin, 2 = superadmin

export type UserRole = 'superadmin' | 'admin' | 'public';

export interface User {
  userID: number;
  username: string;
  password: string; // hashed — never expose in responses
  userLevel: UserLevel;
  photoPath: string | null;
  createdAt: Date;
}

/** Safe user shape — never include password */
export interface SafeUser {
  userID: number;
  username: string;
  userLevel: UserLevel;
  role: UserRole;
  photoPath: string | null;
  createdAt: Date;
}

export interface Session {
  user: SafeUser;
  token?: string;
  expiresAt?: Date;
}

export interface LoginInput {
  username: string;
  password: string;
}

export interface LoginResult {
  user: SafeUser;
  token: string;
}

export function userLevelToRole(level: UserLevel): UserRole {
  if (level === 2) return 'superadmin';
  if (level === 1) return 'admin';
  return 'public';
}
