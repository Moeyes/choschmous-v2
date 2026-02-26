import { PrismaClient } from '@prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate';

const globalForPrisma = globalThis as unknown as { prisma: ReturnType<typeof makePrisma> };

function makePrisma() {
  if (process.env.NODE_ENV === 'development') {
    return new PrismaClient({
      accelerateUrl: process.env.ACCELERATE_URL!,
    }).$extends(withAccelerate()) as any;
  }
  return new PrismaClient({
    accelerateUrl: process.env.ACCELERATE_URL!,
  }).$extends(withAccelerate());
}

export const prisma = globalForPrisma.prisma ?? makePrisma();
export type ExtendedPrismaClient = ReturnType<typeof makePrisma>;

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
