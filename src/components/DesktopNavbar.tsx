import { getUserByClerkId } from '@/lib/queries/users/queries';
import { currentUser } from '@clerk/nextjs/server';
import Navbar from './Navbar';

export default async function DesktopNavbar() {
  const clerkUser = await currentUser();
  let isAdmin = false;
  const user = await getUserByClerkId(clerkUser?.id as string);
  // Redirect unauthorized users
  if (user?.role === 'ADMIN') {
    isAdmin = true;
  }

  return (
    <div>
      <Navbar isAdmin={isAdmin} />
    </div>
  );
}
