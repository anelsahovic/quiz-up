'use server';

import prisma from '@/lib/db';
import { userSchema } from '@/lib/zodSchemas';
import { clerkUser, User } from '@/types/types';
import { parseWithZod } from '@conform-to/zod';
import { Role } from '@prisma/client';
import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';

export async function createUser(user: clerkUser) {
  try {
    return await prisma.user.create({
      data: {
        clerkUserId: user.clerkUserId,
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {}
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
        firstName: submission.value.firstName,
        lastName: submission.value.lastName,
        username: submission.value.username,
        email: submission.value.email,
        role: submission.value.role,
      },
    });
  } catch (error) {}

  return redirect('/dashboard/users');
}
export async function deleteUser(userId: string) {
  try {
    await prisma.user.delete({
      where: { id: userId },
    });
  } catch (error) {
    return NextResponse.json({ error: 'Error deleting user' });
  }
}
