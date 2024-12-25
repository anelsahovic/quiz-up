import CategoryData from '@/components/CategoryData';
import Loading from '@/components/Loading';
import { buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import getSession from '@/lib/getSession';
import { PlusSquare } from 'lucide-react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React, { Suspense } from 'react';

export default async function CategoriesRoute() {
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
    <Card className="w-full h-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Categories</CardTitle>
            <CardDescription>Manage all the categories</CardDescription>
          </div>
          <div>
            <Link
              className={buttonVariants()}
              href="/dashboard/categories/create"
            >
              New <PlusSquare />
            </Link>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Suspense fallback={<Loading />}>
          <CategoryData />
        </Suspense>
      </CardContent>
    </Card>
  );
}
