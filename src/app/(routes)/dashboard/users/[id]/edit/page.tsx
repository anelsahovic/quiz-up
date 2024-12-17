import Loading from '@/components/Loading';
import UserForm from '@/components/UserForm';
import { getUserById } from '@/lib/queries/users/queries';
import { User } from '@/types/types';
import { notFound } from 'next/navigation';
import React, { Suspense } from 'react';

type Props = {
  params: Promise<{ id: string }>;
};

export default async function EditUser({ params }: Props) {
  const { id } = await params;
  const user = await getUserById(id);
  if (!user) {
    return notFound();
  }
  return (
    <Suspense fallback={<Loading />}>
      <UserForm
        formTitle="Edit User"
        buttonText="Save"
        data={user}
        actionType="update"
      />
    </Suspense>
  );
}
