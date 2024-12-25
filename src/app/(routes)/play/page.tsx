import { auth } from '../../../auth';
import LoadingQuiz from '@/components/LoadingQuiz';
import PlayQuiz from '@/components/PlayQuiz';
import getSession from '@/lib/getSession';
import { redirect } from 'next/navigation';
import { Suspense } from 'react';

type Props = {
  searchParams: Promise<{
    category: string;
    questions: string;
    difficulty: string;
  }>;
};

export default async function Play({ searchParams }: Props) {
  const session = await getSession();
  const user = session?.user;
  if (!user) {
    redirect('/sign-in'); // Redirect to homepage if the  user is unavailable
  }

  return (
    <Suspense fallback={<LoadingQuiz text="Starting quiz..." />}>
      <PlayQuiz userId={user.id as string} searchParams={searchParams} />
    </Suspense>
  );
}
