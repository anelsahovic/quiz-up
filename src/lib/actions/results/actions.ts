'use server';

import prisma from '@/lib/db';
import { Result } from '@/types/types';

export const saveResult = async (result: Result) => {
  try {
    return prisma.result.create({
      data: {
        userId: result.userId,
        numberOfQuestions: result.numberOfQuestions,
        correctlyAnswered: result.correctlyAnswered,
        categoryId: result.categoryId,
        difficulty: result.difficulty,
        points: result.points,
      },
    });
  } catch (error) {}
};
