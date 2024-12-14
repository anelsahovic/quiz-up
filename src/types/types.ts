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
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  role: Role;
};
