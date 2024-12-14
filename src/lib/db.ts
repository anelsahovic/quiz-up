import { PrismaClient } from '@prisma/client';

// Attach Prisma to the Node.js global object to prevent multiple instances
const prismaGlobal = global as typeof global & {
  prisma?: PrismaClient;
};

// Create the Prisma Client instance if it doesn't already exist
const prisma = prismaGlobal.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  prismaGlobal.prisma = prisma; // Assign the Prisma instance to the global object
}

export default prisma;
