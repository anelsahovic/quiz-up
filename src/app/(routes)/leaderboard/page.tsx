import LeaderboardTable from '@/components/LeaderboardTable';
import LoadingQuiz from '@/components/LoadingQuiz';
import { Suspense } from 'react';

export default async function LeaderBoard() {
  return (
    <Suspense fallback={<LoadingQuiz text="Loading Leaderboard..." />}>
      <LeaderboardTable />
    </Suspense>
  );
}
