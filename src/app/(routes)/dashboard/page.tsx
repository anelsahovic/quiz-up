import Loading from '@/components/Loading';
import RecentQuizzes from '@/components/RecentQuizzes';
import TotalQuizzes from '@/components/TotalQuizzes';
import TotalPlayers from '@/components/TotalPlayers';
import TotalQuestions from '@/components/TotalQuestions';
import { Suspense } from 'react';
import { auth } from '../../../auth';
import { redirect } from 'next/navigation';
import getSession from '@/lib/getSession';

export default async function Dashboard() {
  const session = await getSession();
  const user = session?.user;
  if (!user) {
    redirect('/sign-in'); // Redirect to homepage if the  user is unavailable
  }
  // Redirect unauthorized users
  if (user?.role !== 'ADMIN') {
    return redirect('/home');
  }
  return (
    <div className="flex flex-col w-full h-full gap-4">
      <div className="shadow-md border border-slate-200 rounded p-2  md:h-1/2">
        <Suspense fallback={<Loading />}>
          <TotalPlayers />
        </Suspense>
      </div>
      <div className="flex flex-col md:flex-row w-full gap-4 h-1/2">
        <div className="shadow-md border border-slate-200 rounded p-2 w-full">
          <Suspense fallback={<Loading />}>
            <TotalQuestions />
          </Suspense>
        </div>
        <div className="shadow-md border border-slate-200 rounded p-2 w-full">
          <Suspense fallback={<Loading />}>
            <TotalQuizzes />
          </Suspense>
        </div>
        <div className="shadow-md border border-slate-200 rounded p-2 w-full">
          <Suspense fallback={<Loading />}>
            <RecentQuizzes />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
