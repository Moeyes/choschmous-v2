import { createHash } from 'crypto';
import { AuthRepository } from './auth.repository';
import type { LoginInput, AuthUser } from './auth.types';
import { loginSchema } from './auth.validators';
import { UnauthorizedError } from '@/lib/api/errors';
import { Role } from '@/config/roles';

function hash(p: string) {
  return createHash('sha256').update(p).digest('hex');
}

export class AuthService {
  constructor(private repo: AuthRepository) {}
  async login(input: LoginInput): Promise<AuthUser> {
    const { email, password } = loginSchema.parse(input);
    const user = await this.repo.findById(email);
    if (!user || user.password !== hash(password)) throw new UnauthorizedError();
    return {
      id: String(user.userID),
      email: user.username,
      role: user.userLevel as unknown as Role,
      name: user.username,
    };
  }
}
