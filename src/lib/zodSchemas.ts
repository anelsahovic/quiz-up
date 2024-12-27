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

export const userCreateSchema = z.object({
  name: z.string().min(2).max(25),
  image: z.string().nullable().optional(),
  email: z
    .string({ required_error: 'E-mail is required' })
    .min(1, 'E-mail is required')
    .email('Invalid e-mail'),
  password: z
    .string({ required_error: 'Password is required' })
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),
  role: z.enum(['ADMIN', 'PLAYER']),
});

export const userUpdateSchema = z.object({
  name: z.string().min(2).max(25),
  image: z.string().nullable().optional(),
  email: z
    .string({ required_error: 'E-mail is required' })
    .min(1, 'E-mail is required')
    .email('Invalid e-mail'),
  role: z.enum(['ADMIN', 'PLAYER']),
});

export const lobbySchema = z.object({
  category: z.string().min(1, 'Please choose a category'),
  numberOfQuestions: z.string().min(1, 'Please choose a number of questions'),
  difficulty: z.enum(['EASY', 'MEDIUM', 'HARD']),
});

export const answersSchema = z.object({
  answer: z.string(),
});

export const signInSchema = z.object({
  email: z
    .string({ required_error: 'E-mail is required' })
    .min(1, 'E-mail is required')
    .email('Invalid e-mail'),
  password: z
    .string({ required_error: 'Password is required' })
    .min(1, 'Password is required')
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),
});

export const signUpSchema = z.object({
  email: z
    .string({ required_error: 'E-mail is required' })
    .min(1, 'E-mail is required')
    .email('Invalid e-mail'),
  password: z
    .string({ required_error: 'Password is required' })
    .min(1, 'Password is required')
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),
  name: z.string().min(2).max(25),
});
