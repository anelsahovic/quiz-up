import Loading from '@/components/Loading';
import QuestionForm from '@/components/QuestionForm';
import { getAllCategories } from '@/lib/queries/categories/queries';
import { Category } from '../../../../../../types/types';
import React, { Suspense } from 'react';
import getSession from '@/lib/getSession';
import { redirect } from 'next/navigation';

export default async function QuestionsCreateRoute() {
  const session = await getSession();
  const user = session?.user;
  if (!user) {
    redirect('/sign-in'); // Redirect to homepage if the  user is unavailable
  }
  // Redirect unauthorized users
  if (user?.role !== 'ADMIN') {
    return redirect('/home');
  }
  const categories: Category[] = await getAllCategories();
  return (
    <Suspense fallback={<Loading />}>
      <QuestionForm
        actionType="create"
        formTitle="Create New Question"
        categories={categories}
      />
    </Suspense>
  );
}
