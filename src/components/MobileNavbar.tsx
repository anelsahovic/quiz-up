import { currentUser } from '@clerk/nextjs/server';
import BottomNav from './BottomNav';
import { getUserByClerkId } from '@/lib/queries/users/queries';

export default async function MobileNavbar() {
  const clerkUser = await currentUser();
  let isAdmin = false;
  const user = await getUserByClerkId(clerkUser?.id as string);

  if (user?.role === 'ADMIN') {
    isAdmin = true;
  }

  return <BottomNav isAdmin={isAdmin} />;
}
