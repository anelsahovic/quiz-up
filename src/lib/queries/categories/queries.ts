import prisma from '@/lib/db';

export const getAllCategories = async () => {
  try {
    return await prisma.category.findMany();
  } catch (error) {
    return [];
  }
};

export const getCategoryById = async (categoryId: string) => {
  try {
    return prisma.category.findFirstOrThrow({
      where: { id: categoryId },
    });
  } catch (error) {}
};
