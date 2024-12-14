import CategoryForm from '@/components/CategoryForm';
import Loading from '@/components/Loading';
import React, { Suspense } from 'react';

export default function CreateCategory() {
  return (
    <Suspense fallback={<Loading />}>
      <CategoryForm formTitle="Create New Category" />
    </Suspense>
  );
}
