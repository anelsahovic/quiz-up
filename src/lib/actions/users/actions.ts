'use server';

import prisma from '@/lib/db';
import { userSchema } from '@/lib/zodSchemas';
import { clerkUser } from '@/types/types';
import { parseWithZod } from '@conform-to/zod';
import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';

export async function createUser(user: clerkUser) {
  try {
    return await prisma.user.create({
      data: {
        clerkUserId: user.clerkUserId,
        imageUrl: user.imageUrl,
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {}
}

export async function updateUserWH(user: clerkUser) {
  try {
    return await prisma.user.update({
      where: {
        clerkUserId: user.clerkUserId,
      },
      data: {
        clerkUserId: user.clerkUserId,
        imageUrl: user.imageUrl,
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {}
}

export async function deleteUserWH(clerkUserId: string) {
  try {
    return await prisma.user.delete({
      where: { clerkUserId: clerkUserId },
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
