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
import Link from 'next/link';
import { Suspense } from 'react';

export default function UsersRoute() {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Users</CardTitle>
            <CardDescription>Manage all the users</CardDescription>
          </div>
          <div>
            <Link className={buttonVariants()} href="/dashboard/users/create">
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
