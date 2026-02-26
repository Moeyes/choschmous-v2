import type { ExtendedPrismaClient } from '@/infrastructure/db/prisma';
export class AuthRepository {
  constructor(private db: ExtendedPrismaClient) {}
  // findByEmail(email: string) {
  //   return this.db.users.findUnique({ where: { email } });
  // }
  findById(id: string) {
    return this.db.users.findUnique({ where: { userID: parseInt(id) } });
  }
}
