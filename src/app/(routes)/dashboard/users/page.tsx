import Loading from '@/components/Loading';
import { buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import UsersData from '@/components/UsersData';
import { PlusSquare } from 'lucide-react';
import getSession from '@/lib/getSession';
import { redirect } from 'next/navigation';
import { Suspense } from 'react';
import Link from 'next/link';

export default async function UsersRoute() {
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
    <Card className="w-full h-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Users</CardTitle>
            <CardDescription>Manage all the users</CardDescription>
          </div>
          <div>
            <Link
              href="/dashboard/users/create"
              className={`${buttonVariants()} `}
            >
              New <PlusSquare />
            </Link>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Suspense fallback={<Loading />}>
          <UsersData />
        </Suspense>
      </CardContent>
    </Card>
  );
}
