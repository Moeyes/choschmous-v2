// ============================================================
// domains/auth/auth.types.ts
// Matches backend SQLAlchemy User model (src/database/model.py)
// ============================================================

import { Role } from '@/config/roles';

// Matches backend UserRole enum
export type UserLevel = 0 | 1 | 2; // 0 = guest, 1 = admin, 2 = superadmin

export type UserRole = 'superadmin' | 'admin' | 'public';

// Matches backend User table exactly (uuid PK, kh/en names, username, email, user_level)
export interface BackendUser {
  id: string;              // UUID
  kh_family_name: string;
  kh_given_name: string;
  en_family_name: string;
  en_given_name: string;
  email: string;
  username: string;
  user_level: UserLevel;
  photo_path: string | null;
  created_at: string;
}

/** Safe user shape returned from backend — no password */
export interface SafeUser {
  id: string;
  username: string;
  email: string;
  user_level: UserLevel;
  role: UserRole;
  kh_family_name: string;
  kh_given_name: string;
  en_family_name: string;
  en_given_name: string;
  photo_path: string | null;
}

export interface Session {
  user: SafeUser;
}

export interface LoginInput {
  username: string;
  password: string;
}

// What the backend POST /login returns
export interface BackendLoginResponse {
  success: boolean;
  user: SafeUser;
  token?: string;
}

// What the frontend session stores / passes around
export interface AuthUser {
  id: string;
  email: string;
  username: string;
  role: Role;
  name: string;
  user_level: UserLevel;
}

export function userLevelToRole(level: UserLevel): UserRole {
  if (level === 2) return 'superadmin';
  if (level === 1) return 'admin';
  return 'public';
}

export function userLevelToFrontendRole(level: UserLevel): Role {
  if (level === 2) return Role.SUPERADMIN;
  return Role.ADMIN;
}
