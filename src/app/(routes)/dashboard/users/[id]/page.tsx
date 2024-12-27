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
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { deleteUser } from '@/lib/actions/users/actions';
import { getUserById } from '@/lib/queries/users/queries';
import { Pencil, SquareArrowLeft, Trash } from 'lucide-react';
import getSession from '@/lib/getSession';
import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import React from 'react';

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ShowUser({ params }: Props) {
  const session = await getSession();
  const userAuth = session?.user;
  if (!userAuth) {
    redirect('/sign-in'); // Redirect to homepage if the  user is unavailable
  }
  // Redirect unauthorized users
  if (userAuth?.role !== 'ADMIN') {
    return redirect('/home');
  }

  const { id } = await params;
  const user = await getUserById(id);
  if (!user) {
    return notFound();
  }

  return (
    <Card className="max-w-4xl mx-auto py-2 px-6 bg-white shadow-lg rounded-lg">
      <CardHeader className="flex pb-4">
        <div className="flex items-center justify-between pb-4">
          <div>
            <Link href="/dashboard/users">
              <SquareArrowLeft
                size={30}
                className="text-gray-700 hover:text-purple-600 transition-all duration-300"
              />
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href={`/dashboard/users/${user?.id}/edit`}
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
                    this user and remove its data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction asChild>
                    <form
                      action={async () => {
                        'use server';

                        const userId = await getUserById(id);
                        await deleteUser(id);
                        redirect(`/dashboard/users`);
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
          <div className="text-center sm:text-left flex flex-col items-center ">
            <Avatar className="size-20 border-2 shadow-md">
              <AvatarImage
                className="border-primary"
                src={user?.image as string}
              />

              <AvatarFallback className="bg-primary text-white text-2xl font-bold border-white">
                {user && user.name && user.name[0]}
              </AvatarFallback>
            </Avatar>
            <div className="mt-4">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center">
                {user.name}
              </h1>
              <p className="text-sm text-gray-500 text-center">{user.email}</p>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row text-center items-center gap-4 border-b mb-4">
            <div>
              <div className="p-2 ">
                <p className="text-xs font-semibold text-primary uppercase tracking-wider">
                  ID
                </p>
                <p className="text-sm font-medium text-gray-900 mt-1">
                  {user.id}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full ">
            <div className="w-full">
              <div className="p-4 bg-gradient-to-tr from-purple-50 to-white rounded-md shadow-md hover:shadow-lg transition-shadow">
                <p className="text-xs font-semibold text-primary uppercase tracking-wider">
                  Name
                </p>
                <p className="text-lg font-medium text-gray-900 mt-1">
                  {user.name}
                </p>
              </div>
            </div>
            <div className="w-full">
              <div className="p-4 bg-gradient-to-tr from-purple-50 to-white rounded-md shadow-md hover:shadow-lg transition-shadow">
                <p className="text-xs font-semibold text-primary uppercase tracking-wider">
                  Role
                </p>
                <p className="text-lg font-medium text-gray-900 mt-1">
                  {user.role}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full ">
            <div className="w-full">
              <div className="p-4 bg-gradient-to-tr from-purple-50 to-white rounded-md shadow-md hover:shadow-lg transition-shadow">
                <p className="text-xs font-semibold text-primary uppercase tracking-wider">
                  Email
                </p>
                <p className="text-lg font-medium text-gray-900 mt-1">
                  {user.email}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row text-center items-center gap-4 w-full mt-4 border-t">
            <div className="w-full">
              <div className="p-2">
                <p className="text-xs font-semibold text-primary uppercase tracking-wider">
                  Created At
                </p>
                <p className="text-sm font-medium text-gray-900 mt-1">
                  {new Date(user.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className="w-full">
              <div className="p-2">
                <p className="text-xs font-semibold text-primary uppercase tracking-wider">
                  Updated At
                </p>
                <p className="text-sm font-medium text-gray-900 mt-1">
                  {new Date(user.updatedAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
