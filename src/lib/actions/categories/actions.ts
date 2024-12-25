'use server';

import prisma from '@/lib/db';
import { categorySchema } from '@/lib/zodSchemas';
import { parseWithZod } from '@conform-to/zod';
import { redirect } from 'next/navigation';

export async function createCategory(lastResult: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: categorySchema,
  });

  if (submission.status !== 'success') {
    return submission.reply();
  }

  await prisma.category.create({
    data: {
      name: submission.value.name,
    },
  });

  return redirect('/dashboard/categories');
}

export async function updateCategory(lastResult: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: categorySchema,
  });

  if (submission.status !== 'success') {
    return submission.reply();
  }

  await prisma.category.update({
    where: {
      id: formData.get('categoryId') as string,
    },
    data: {
      name: submission.value.name,
    },
  });

  return redirect('/dashboard/categories');
}

export async function deleteCategory(categoryId: string) {
  await prisma.category.delete({
    where: {
      id: categoryId,
    },
  });

  redirect('/dashboard/categories');
}
