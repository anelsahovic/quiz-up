import Loading from '@/components/Loading';
import UserForm from '@/components/UserForm';
import getSession from '@/lib/getSession';
import { getUserById } from '@/lib/queries/users/queries';
import { notFound, redirect } from 'next/navigation';
import React, { Suspense } from 'react';

export default async function EditUserProfileRoute() {
  const session = await getSession();
  const userFromSession = session?.user;
  if (!userFromSession) {
    redirect('/sign-in'); // Redirect to homepage if the  user is unavailable
  }
  const userFromDataBase = await getUserById(userFromSession.id as string);

  return (
    <div className=" flex items-center justify-center py-16">
      <Suspense fallback={<Loading />}>
        <UserForm
          formTitle="Edit My Profile"
          buttonText="Save"
          data={userFromDataBase}
          actionType="update"
        />
      </Suspense>
    </div>
  );
}
