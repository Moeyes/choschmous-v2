import { PrismaClient } from '@prisma/client';
export class AuthRepository {
  constructor(private db: PrismaClient) {}
  findByEmail(email: string) { return this.db.user.findUnique({ where: { email } }); }
  findById(id: string)       { return this.db.user.findUnique({ where: { id } }); }
}
