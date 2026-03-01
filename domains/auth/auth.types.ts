// ============================================================
// domains/auth/auth.types.ts
// Matches backend SQLAlchemy User model (src/database/model.py)
// ============================================================

import { Role } from '@/config/roles';

// Backend UserRole enum values (from enumdata.py)
export type BackendRole = 'admin' | 'user1' | 'user2' | 'guest';

export type UserRole = 'superadmin' | 'admin' | 'public';

// Matches backend UserPublic schema (user.py)
export interface BackendUser {
  id: string; // UUID
  kh_family_name: string;
  kh_given_name: string;
  en_family_name: string;
  en_given_name: string;
  email: string;
  username: string;
  role: BackendRole;
  photo_path: string | null;
  full_name: string | null;
  is_active: boolean;
  is_superuser: boolean;
  created_at: string;
}

/** Safe user shape for frontend use — no password */
export interface SafeUser {
  id: string;
  username: string;
  email: string;
  role: BackendRole;
  kh_family_name: string;
  kh_given_name: string;
  en_family_name: string;
  en_given_name: string;
  photo_path: string | null;
  is_superuser: boolean;
}

export interface Session {
  user: SafeUser;
}

export interface LoginInput {
  username: string;
  password: string;
}

// What the backend POST /api/auth/login returns
export interface BackendLoginResponse {
  access_token: string;
  refresh_token: string;
  token_type: string;
}

// What the frontend session stores / passes around
export interface AuthUser {
  id: string;
  email: string;
  username: string;
  role: Role;
  name: string;
}

export function backendRoleToFrontendRole(role: BackendRole, isSuperuser: boolean): Role {
  if (isSuperuser) return Role.SUPERADMIN;
  if (role === 'admin') return Role.SUPERADMIN;
  return Role.ADMIN;
}

export function backendRoleToDisplayRole(role: BackendRole): UserRole {
  if (role === 'admin') return 'superadmin';
  if (role === 'user1' || role === 'user2') return 'admin';
  return 'public';
}
