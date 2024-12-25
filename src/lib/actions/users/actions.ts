'use server';

import prisma from '@/lib/db';
import { userSchema } from '@/lib/zodSchemas';
import { parseWithZod } from '@conform-to/zod';
import { Role } from '@prisma/client';
import { User } from 'next-auth';
import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';

export async function createUser(lastResult: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: userSchema,
  });

  if (submission.status !== 'success') {
    return submission.reply();
  }

  try {
    await prisma.user.create({
      data: {
        name: submission.value.name,
        image: submission.value.image,
        email: submission.value.email,
        role: submission.value.role,
      },
    });
  } catch (error) {}

  redirect('/dashboard/users');
}

export async function updateUser(lastResult: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: userSchema,
  });

  if (submission.status !== 'success') {
    return submission.reply();
  }

  try {
    await prisma.user.update({
      where: { id: formData.get('userId') as string },
      data: {
        name: submission.value.name,
        image: submission.value.image,
        email: submission.value.email,
        role: submission.value.role,
      },
    });
  } catch (error) {}

  return redirect('/dashboard/users');
}

export async function deleteUser(userId: string) {
  await prisma.user.delete({
    where: { id: userId },
  });

  redirect('/dashboard/users');
}
