import CategoryForm from '@/components/CategoryForm';
import Loading from '@/components/Loading';
import { getCategoryById } from '@/lib/queries/categories/queries';
import React, { Suspense } from 'react';

type Props = {
  params: Promise<{ id: string }>;
};

export default async function EditCategory({ params }: Props) {
  const { id } = await params;
  const category = (await getCategoryById(id)) ?? undefined;

  return (
    <Suspense fallback={<Loading />}>
      <CategoryForm
        formTitle="Edit Category"
        data={category}
        buttonText="Save"
      />
    </Suspense>
  );
}
