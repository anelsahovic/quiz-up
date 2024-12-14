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
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Pencil, SquareArrowLeft, Trash } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function ShowUser() {
  const user = {
    firstName: 'Jane',
    lastName: 'Doe',
    username: 'janedoe',
    role: 'admin',
    email: 'jane.doe@example.com',
    createdAt: '2024-01-01T10:00:00.000Z',
    updatedAt: '2024-01-10T15:30:00.000Z',
  };

  const userCards = [
    { label: 'First Name', value: user.firstName || 'N/A' },
    { label: 'Last Name', value: user.lastName || 'N/A' },
    { label: 'Username', value: user.username || 'N/A' },
    { label: 'Role', value: user.role || 'N/A' },
    { label: 'Email', value: user.email || 'N/A' },
    {
      label: 'Created At',
      value: user.createdAt
        ? new Date(user.createdAt).toLocaleDateString()
        : 'N/A',
    },
    {
      label: 'Updated At',
      value: user.updatedAt
        ? new Date(user.updatedAt).toLocaleDateString()
        : 'N/A',
    },
  ];
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
              href={`/dashboard/users`}
              // href={`/dashboard/questions/${user?.id}/edit`}
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
                  <AlertDialogAction>Delete</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
        <div>
          <div className="text-center sm:text-left flex flex-col items-center ">
            <Avatar className="w-20 h-20 text-primary border-2 border-gray-200 shadow-md">
              <AvatarFallback className="bg-primary text-white text-xl font-bold">
                {`${user.firstName?.[0] || ''}${user.lastName?.[0] || ''}`}
              </AvatarFallback>
            </Avatar>
            <div className="mt-4">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                {user.firstName} {user.lastName}
              </h1>
              <p className="text-sm text-gray-500 text-center">
                @{user.username || 'username'}
              </p>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
          {userCards.map((item, index) => (
            <div
              key={index}
              className="p-4 bg-gradient-to-tr from-purple-50 to-white rounded-md shadow-md hover:shadow-lg transition-shadow"
            >
              <p className="text-xs font-semibold text-primary uppercase tracking-wider">
                {item.label}
              </p>
              <p className="text-lg font-medium text-gray-900 mt-1">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
