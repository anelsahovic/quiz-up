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
            <span
              className={`${buttonVariants()} opacity-50 hover:bg-primary cursor-not-allowed`}
            >
              New <PlusSquare />
            </span>
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
