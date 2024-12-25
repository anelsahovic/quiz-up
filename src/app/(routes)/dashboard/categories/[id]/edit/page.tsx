import CategoryForm from '@/components/CategoryForm';
import Loading from '@/components/Loading';
import { getCategoryById } from '@/lib/queries/categories/queries';
import getSession from '@/lib/getSession';
import { redirect } from 'next/navigation';
import React, { Suspense } from 'react';

type Props = {
  params: Promise<{ id: string }>;
};

export default async function EditCategory({ params }: Props) {
  const session = await getSession();
  const user = session?.user;
  if (!user) {
    redirect('/sign-in'); // Redirect to homepage if the  user is unavailable
  }
  // Redirect unauthorized users
  if (user?.role !== 'ADMIN') {
    return redirect('/home');
  }

  const { id } = await params;
  const category = (await getCategoryById(id)) ?? undefined;

  return (
    <Suspense fallback={<Loading />}>
      <CategoryForm
        actionType="update"
        formTitle="Edit Category"
        data={category}
        buttonText="Save"
      />
    </Suspense>
  );
}
