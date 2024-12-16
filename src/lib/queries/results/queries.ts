import prisma from '@/lib/db';

export async function getAllResults() {
  try {
    return await prisma.result.findMany();
  } catch (error) {
    return [];
  }
}
