import prisma from '@/lib/db';

export const getAllUsers = async () => {
  return await prisma.user.findMany();
};
