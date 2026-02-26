import { Role } from '@/config/roles';
export type AuthUser  = { id: string; email: string; role: Role; name?: string | null };
export type LoginInput = { email: string; password: string };
