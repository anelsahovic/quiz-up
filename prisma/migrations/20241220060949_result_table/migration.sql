/*
  Warnings:

  - Added the required column `difficulty` to the `Result` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Result" ADD COLUMN     "difficulty" "DifficultyLevel" NOT NULL;
