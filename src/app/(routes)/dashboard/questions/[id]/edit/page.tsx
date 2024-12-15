import Loading from '@/components/Loading';
import QuestionForm from '@/components/QuestionForm';
import {
  getAllCategories,
  getCategoryById,
} from '@/lib/queries/categories/queries';
import { getQuestionById } from '@/lib/queries/questions/queries';
import { Category } from '@/types/types';
import { notFound } from 'next/navigation';
import React from 'react';
import { Suspense } from 'react';

type Props = {
  params: Promise<{ id: string }>;
};

export default async function EditQuestion({ params }: Props) {
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
