import SubmitButton from '@/components/SubmitButton';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { deleteCategory } from '@/lib/actions/categories/actions';
import { getCategoryById } from '@/lib/queries/categories/queries';
import { Pencil, SquareArrowLeft, Trash } from 'lucide-react';
import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ShowCategory({ params }: Props) {
  const { id } = await params;
  const category = await getCategoryById(id);
  if (!category) {
    return notFound();
  }
  return (
    <Card className="max-w-4xl mx-auto py-2 px-6 bg-white shadow-lg rounded-lg">
      <CardHeader className="flex border-b pb-4">
        <div className="flex items-center justify-between pb-4">
          <div>
            <Link href="/dashboard/categories">
              <SquareArrowLeft
                size={30}
                className="text-gray-700 hover:text-purple-600 transition-all duration-300"
              />
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href={`/dashboard/categories/${category?.id}/edit`}
              className={buttonVariants({ variant: 'secondary' })}
            >
              <Pencil />
            </Link>
            <AlertDialog>
              <AlertDialogTrigger className={`${buttonVariants()}`}>
                <Trash />
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    this category and remove its data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction asChild>
                    <form
                      action={async () => {
                        'use server';

                        deleteCategory(id);
                        redirect(`/dashboard/categories`);
                      }}
                    >
                      <SubmitButton text="Delete" />
                    </form>
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Category: {category.name}
          </h1>
        </div>
      </CardHeader>

      <CardContent className="mt-6 space-y-6">
        <div className="flex flex-col items-start  gap-4 ">
          <div className="flex flex-col bg-slate-100 p-2 shadow rounded w-full">
            <span className="text-sm font-medium text-gray-600">ID</span>
            <span className="text-base sm:text-lg text-gray-800 font-semibold">
              {category.id}
            </span>
          </div>
          <div className="flex flex-col w-full bg-slate-100 p-2 shadow rounded">
            <span className="text-sm font-medium text-gray-600">Name</span>
            <span className="text-base sm:text-lg text-gray-800 font-semibold">
              {category.name}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
