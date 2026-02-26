import { createHash } from 'crypto';
import { AuthRepository } from './auth.repository';
import type { LoginInput, AuthUser } from './auth.types';
import { loginSchema } from './auth.validators';
import { UnauthorizedError } from '@/lib/api/errors';
import { Role } from '@/config/roles';

function hash(p: string) { return createHash('sha256').update(p).digest('hex'); }

export class AuthService {
  constructor(private repo: AuthRepository) {}
  async login(input: LoginInput): Promise<AuthUser> {
    const { email, password } = loginSchema.parse(input);
    const user = await this.repo.findByEmail(email);
    if (!user || user.passwordHash !== hash(password)) throw new UnauthorizedError();
    return { id: user.id, email: user.email, role: user.role as Role, name: user.name };
  }
}
