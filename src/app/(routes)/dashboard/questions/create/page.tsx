import Loading from '@/components/Loading';
import QuestionForm from '@/components/QuestionForm';
import React, { Suspense } from 'react';

export default function QuestionsCreateRoute() {
  return (
    <Suspense fallback={<Loading />}>
      <QuestionForm formTitle="Create New Question" />
    </Suspense>
  );
}
