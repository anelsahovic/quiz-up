import Loading from '@/components/Loading';
import UserForm from '@/components/UserForm';
import getSession from '@/lib/getSession';
import { redirect } from 'next/navigation';
import React, { Suspense } from 'react';

export default async function UsersCreateRoute() {
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
      <UserForm actionType="create" formTitle="Create New User" />
    </Suspense>
  );
}
