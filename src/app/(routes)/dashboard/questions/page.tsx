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
import Link from 'next/link';
import { Suspense } from 'react';

export default function QuestionsRoute() {
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
