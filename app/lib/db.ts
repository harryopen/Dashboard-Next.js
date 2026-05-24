import { PrismaClient } from '@prisma/client';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';

// Reuses the client instance in development to prevent connection leaks during hot-reloads
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

const adapter = new PrismaBetterSqlite3({
  url: 'file:./dev.db',
});

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter,
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
