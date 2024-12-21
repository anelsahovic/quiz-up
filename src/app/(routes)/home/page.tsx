import Home from '@/components/Home';
import LoadingQuiz from '@/components/LoadingQuiz';
import { Suspense } from 'react';

export default async function HomePageRoute() {
  return;
  <Suspense fallback={<LoadingQuiz text="Loading Home..." />}>
    <Home />
  </Suspense>;
}
