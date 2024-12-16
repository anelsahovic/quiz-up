import prisma from '@/lib/db';

export const getAllQuestions = async () => {
  try {
    const questions = await prisma.question.findMany({
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
    if (!questions) {
      throw new Error('No questions found.');
    }
    return questions;
  } catch (error) {
    return []; // Ensure you return an empty array instead of null
  }
};

export const getQuestionById = async (id: string) => {
  return await prisma.question.findUnique({
    where: {
      id: id,
    },
  });
};
