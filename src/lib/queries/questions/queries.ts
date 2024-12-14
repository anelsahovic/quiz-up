import prisma from '@/lib/db';

export const getAllQuestions = async () => {
  return await prisma.question.findMany({
    select: {
      id: true,
      question: true,
      options: true,
      correctAnswer: true,
      category: true,
      difficulty: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

export const getQuestionById = async (id: string) => {
  return await prisma.question.findUnique({
    where: {
      id: id,
    },
  });
};
