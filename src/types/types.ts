import { DifficultyLevel, Role } from '@prisma/client';

export type Question = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  categoryId: string;
  difficulty: DifficultyLevel;
  createdAt: Date;
  updatedAt: Date;
};

export type Category = {
  id: string;
  name: string;
};

export type User = {
  id: string;
  clerkUserId: string;
  imageUrl: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  role: Role;
};

export type clerkUser = {
  clerkUserId: string;
  imageUrl: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
};

export type Result = {
  userId: string;
  numberOfQuestions: number;
  correctlyAnswered: number;
  categoryId: string;
  difficulty: DifficultyLevel;
  points: number;
};

export type UserResult = {
  user: { imageUrl: string; firstName: string; lastName: string };
  points: number;
};
