import prisma from '@/lib/db';

export const getAllCategories = async () => {
  try {
    return await prisma.category.findMany();
  } catch (error) {
    return [];
  }
};

export const getCategoryById = async (id: string) => {
  try {
    return prisma.category.findUnique({
      where: { id: id },
    });
  } catch (error) {
    throw new Error(`Category with ID ${id} not found.`);
  }
};
