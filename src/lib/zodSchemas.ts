import { z } from 'zod';

export const questionSchema = z.object({
  question: z.string().max(256).min(2),
  answerOne: z.string().max(256),
  answerTwo: z.string().max(256),
  answerThree: z.string().max(256),
  answerFour: z.string().max(256),
  correctAnswer: z.number().min(1).max(4),
  difficulty: z.enum(['EASY', 'MEDIUM', 'HARD']),
  categoryId: z.string(),
});

export const categorySchema = z.object({
  name: z.string().min(2).max(20),
});

export const userSchema = z.object({
  firstName: z.string().min(2).max(25),
  lastName: z.string().min(2).max(25),
  username: z.string().min(2).max(25),
  email: z.string(),
  role: z.enum(['ADMIN', 'PLAYER']),
});
