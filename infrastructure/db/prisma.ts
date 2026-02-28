import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

function makePrisma() {
  return new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
  });
}

export const prisma: PrismaClient = globalForPrisma.prisma ?? makePrisma();
export type ExtendedPrismaClient = PrismaClient;

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
