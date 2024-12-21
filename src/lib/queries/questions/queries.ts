import prisma from '@/lib/db';
import { DifficultyLevel } from '@prisma/client';

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

export const getQuizQuestions = async (
  categoryId: string,
  difficulty: DifficultyLevel,
  numberOfQuestions: number
) => {
  try {
    const allQuestions = await prisma.question.findMany({
      where: { categoryId: categoryId, difficulty: difficulty },
    });
    const shuffled = allQuestions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numberOfQuestions);
  } catch (error) {}
};

export async function getQuizQuestionsWithRetry(
  categoryId: string,
  difficulty: DifficultyLevel,
  numberOfQuestions: number
) {
  let isQuestions = false;
  while (!isQuestions) {
    try {
      const allQuestions = await prisma.question.findMany({
        where: { categoryId: categoryId, difficulty: difficulty },
      });
      const shuffled = allQuestions.sort(() => 0.5 - Math.random());

      if (shuffled) {
        isQuestions = true;
        return shuffled.slice(0, numberOfQuestions); // User found
      }
    } catch (error) {}
  }
}
