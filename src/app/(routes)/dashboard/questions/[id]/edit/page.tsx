import Loading from '@/components/Loading';
import QuestionForm from '@/components/QuestionForm';
import {
  getAllCategories,
  getCategoryById,
} from '@/lib/queries/categories/queries';
import { getQuestionById } from '@/lib/queries/questions/queries';
import { Category } from '../../../../../../../types/types';
import { notFound, redirect } from 'next/navigation';
import React from 'react';
import { Suspense } from 'react';
import getSession from '@/lib/getSession';

type Props = {
  params: Promise<{ id: string }>;
};

export default async function EditQuestion({ params }: Props) {
  const session = await getSession();
  const user = session?.user;
  if (!user) {
    redirect('/sign-in'); // Redirect to homepage if the  user is unavailable
  }
  // Redirect unauthorized users
  if (user?.role !== 'ADMIN') {
    return redirect('/home');
  }

  const { id } = await params;
  const question = await getQuestionById(id);
  const categories: Category[] = await getAllCategories();
  const selectedCategory = await getCategoryById(
    question?.categoryId as string
  );
  if (!question) {
    return notFound();
  }
  return (
    <Suspense fallback={<Loading />}>
      <QuestionForm
        categories={categories}
        data={question}
        selectedCategory={selectedCategory?.id}
        actionType="update"
        formTitle="Edit Question"
        buttonText="Save"
      />
    </Suspense>
  );
}
