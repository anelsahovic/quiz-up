import LoadingQuiz from '@/components/LoadingQuiz';
import MyProfile from '@/components/MyProfile';
import { Suspense } from 'react';

export default function MyProfileRoute() {
  return (
    <Suspense fallback={<LoadingQuiz text="Loading Profile..." />}>
      <MyProfile />
    </Suspense>
  );
}
