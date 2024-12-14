import Loading from '@/components/Loading';
import QuestionForm from '@/components/QuestionForm';
import { getQuestionById } from '@/lib/queries/questions/queries';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

type Props = {
  params: Promise<{ id: string }>;
};

export default async function EditQuestion({ params }: Props) {
  const { id } = await params;
  const question = await getQuestionById(id);

  if (!question) {
    return notFound();
  }
  return (
    <Suspense fallback={<Loading />}>
      <QuestionForm
        data={question}
        formTitle="Edit Question"
        buttonText="Save"
      />
    </Suspense>
  );
}
