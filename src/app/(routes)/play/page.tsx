import LoadingQuiz from '@/components/LoadingQuiz';
import PlayQuiz from '@/components/PlayQuiz';
import { currentUser } from '@clerk/nextjs/server';
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
  const clerkUser = await currentUser();
  if (clerkUser === null) {
    return redirect('/');
  }
  return (
    <Suspense fallback={<LoadingQuiz text="Starting quiz..." />}>
      <PlayQuiz clerkUserId={clerkUser.id} searchParams={searchParams} />
    </Suspense>
  );
}
