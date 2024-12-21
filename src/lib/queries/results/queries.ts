import prisma from '@/lib/db';

export async function getAllResults() {
  try {
    return await prisma.result.findMany();
  } catch (error) {
    return [];
  }
}

export async function getGroupedResults() {
  try {
    return await prisma.user.findMany({});
  } catch (error) {}
}

export async function getResultByUser(userId: string) {
  try {
    return await prisma.result.findMany({
      where: { userId: userId },
    });
  } catch (error) {}
}
