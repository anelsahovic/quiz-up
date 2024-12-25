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
  image: string | null;
  id: string;
  role: Role;
  name: string | null;
  email: string;
  createdAt: Date;
  updatedAt: Date;
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
  user: { imageUrl: string; name: string };
  points: number;
};
