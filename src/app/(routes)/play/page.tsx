import { getCategoryById } from '@/lib/queries/categories/queries';
import React from 'react';

type Props = {
  searchParams: Promise<{ category: string; questions: string }>;
};

export default async function Play({ searchParams }: Props) {
  const { category, questions } = await searchParams;
  const fetchedCategory = await getCategoryById(category);
  // console.log(categoryId, numberOfQuestions);
  return (
    <div>
      Play <br />
      {fetchedCategory?.name} <br />
      {questions}
    </div>
  );
}
