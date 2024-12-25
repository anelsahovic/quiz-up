import { auth } from '../../../auth';
import LeaderboardTable from '@/components/LeaderboardTable';
import LoadingQuiz from '@/components/LoadingQuiz';
import getSession from '@/lib/getSession';
import { redirect } from 'next/navigation';
import { Suspense } from 'react';

export default async function LeaderBoard() {
  const session = await getSession();
  const user = session?.user;
  if (!user) {
    redirect('/sign-in'); // Redirect to homepage if the  user is unavailable
  }
  return (
    <Suspense fallback={<LoadingQuiz text="Loading Leaderboard..." />}>
      <LeaderboardTable />
    </Suspense>
  );
}
