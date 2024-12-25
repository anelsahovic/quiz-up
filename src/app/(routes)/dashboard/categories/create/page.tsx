import CategoryForm from '@/components/CategoryForm';
import Loading from '@/components/Loading';
import getSession from '@/lib/getSession';
import { redirect } from 'next/navigation';
import React, { Suspense } from 'react';

export default async function CreateCategory() {
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
    <Suspense fallback={<Loading />}>
      <CategoryForm actionType="create" formTitle="Create New Category" />
    </Suspense>
  );
}
