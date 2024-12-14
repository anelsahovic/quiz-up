import prisma from '@/lib/db';

export const getAllCategories = async () => {
  return await prisma.category.findMany();
};

export const getCategoryById = async (id: string) => {
  return prisma.category.findUnique({
    where: { id: id },
  });
};
