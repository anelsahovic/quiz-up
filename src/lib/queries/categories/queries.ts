import prisma from '@/lib/db';

export const getAllCategories = async () => {
  try {
    return await prisma.category.findMany();
  } catch (error) {
    return [];
  }
};

export const getCategoryById = async (id: string) => {
  return prisma.category.findUnique({
    where: { id: id },
  });
};
