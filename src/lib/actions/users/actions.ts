'use server';

import { signIn } from '@/auth';
import prisma from '@/lib/db';
import { signInSchema, signUpSchema, userSchema } from '@/lib/zodSchemas';
import { parseWithZod } from '@conform-to/zod';
import { hash } from 'bcrypt';
import { redirect } from 'next/navigation';

export async function signUpUser(lastResult: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: signUpSchema,
  });

  if (submission.status !== 'success') {
    return submission.reply();
  }

  try {
    const hashedPassword = await hash(submission.value.password, 10);
    const normalizedEmail = submission.value.email.toLowerCase().trim();
    await prisma.user.create({
      data: {
        name: submission.value.name,
        email: normalizedEmail,
        password: hashedPassword,
      },
    });
  } catch (error) {
    console.error('Error creating user:', error);
    return {
      success: false,
      error: {
        error: ['Failed to register. Please try again.'],
      } as Record<string, string[] | null>, // Correctly asserting the type
    };
  }

  redirect('/sign-in');
}

export const signInUser = async (lastResult: unknown, formData: FormData) => {
  const submission = parseWithZod(formData, {
    schema: signInSchema,
  });

  if (submission.status !== 'success') {
    return submission.reply();
  }

  const email = submission.value.email.toLowerCase().trim();
  const password = submission.value.password;

  try {
    const result = await signIn('credentials', {
      redirect: false, // Avoid automatic redirect
      callbackUrl: '/home', // Successful login redirect
      email,
      password,
    });
  } catch (error) {
    return {
      success: false,
      error: {
        error: ['Invalid credentials. Please try again.'],
      } as Record<string, string[] | null>, // Correctly asserting the type
    };
  }
  return redirect('/home');
};

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
        password: submission.value.password,
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

  return redirect('/home');
}

export async function deleteUser(userId: string) {
  await prisma.user.delete({
    where: { id: userId },
  });

  redirect('/dashboard/users');
}
