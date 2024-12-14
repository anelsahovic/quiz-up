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
import { PlusSquare } from 'lucide-react';
import Link from 'next/link';
import React, { Suspense } from 'react';

export default function CategoriesRoute() {
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
