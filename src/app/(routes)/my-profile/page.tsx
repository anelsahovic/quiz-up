import { auth } from '../../../auth';
import LoadingQuiz from '@/components/LoadingQuiz';
import MyProfile from '@/components/MyProfile';
import getSession from '@/lib/getSession';
import { redirect } from 'next/navigation';
import { Suspense } from 'react';

export default async function MyProfileRoute() {
  const session = await getSession();
  const user = session?.user;
  if (!user) {
    redirect('/sign-in'); // Redirect to homepage if the  user is unavailable
  }
  return (
    <Suspense fallback={<LoadingQuiz text="Loading Profile..." />}>
      <MyProfile />
    </Suspense>
  );
}
