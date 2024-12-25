import Loading from '@/components/Loading';
import QuestionsData from '@/components/QuestionsData';
import { buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PlusSquare } from 'lucide-react';
import getSession from '@/lib/getSession';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { Suspense } from 'react';

export default async function QuestionsRoute() {
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
    <Card className="h-full w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Questions</CardTitle>
            <CardDescription>Manage all the questions</CardDescription>
          </div>
          <div>
            <Link
              className={buttonVariants()}
              href="/dashboard/questions/create"
            >
              New <PlusSquare />
            </Link>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Suspense fallback={<Loading />}>
          <QuestionsData />
        </Suspense>
      </CardContent>
    </Card>
  );
}
