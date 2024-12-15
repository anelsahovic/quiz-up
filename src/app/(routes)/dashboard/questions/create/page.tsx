import Loading from '@/components/Loading';
import QuestionForm from '@/components/QuestionForm';
import { getAllCategories } from '@/lib/queries/categories/queries';
import { Category } from '@/types/types';
import React, { Suspense } from 'react';

export default async function QuestionsCreateRoute() {
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
