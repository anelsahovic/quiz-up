'use server';
import prisma from '@/lib/db';
import { questionSchema } from '@/lib/zodSchemas';
import { parseWithZod } from '@conform-to/zod';
import { redirect } from 'next/navigation';

export async function createQuestion(lastResult: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: questionSchema,
  });

  if (submission.status !== 'success') {
    return submission.reply();
  }

  await prisma.question.create({
    data: {
      question: submission.value.question,
      options: [
        submission.value.answerOne,
        submission.value.answerTwo,
        submission.value.answerThree,
        submission.value.answerFour,
      ],
      correctAnswer: submission.value.correctAnswer - 1,
      difficulty: submission.value.difficulty,
      categoryId: submission.value.categoryId,
    },
  });

  return redirect('/dashboard/questions');
}

export async function updateQuestion(lastResult: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: questionSchema,
  });

  if (submission.status !== 'success') {
    return submission.reply();
  }

  await prisma.question.update({
    where: { id: formData.get('questionId') as string },
    data: {
      question: submission.value.question,
      options: [
        submission.value.answerOne,
        submission.value.answerTwo,
        submission.value.answerThree,
        submission.value.answerFour,
      ],
      correctAnswer: submission.value.correctAnswer - 1,
      difficulty: submission.value.difficulty,
      categoryId: submission.value.categoryId,
    },
  });

  return redirect('/dashboard/questions');
}

export async function deleteQuestion(questionId: string) {
  await prisma.question.delete({
    where: { id: questionId },
  });

  redirect('/dashboard/questions');
}
