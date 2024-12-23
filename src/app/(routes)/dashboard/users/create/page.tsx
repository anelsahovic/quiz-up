import Loading from '@/components/Loading';
import UserForm from '@/components/UserForm';
import React, { Suspense } from 'react';

export default function UsersCreateRoute() {
  return (
    <Suspense fallback={<Loading />}>
      <UserForm actionType="create" formTitle="Create New User" />
    </Suspense>
  );
}
