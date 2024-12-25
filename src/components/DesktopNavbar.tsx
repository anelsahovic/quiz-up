import Navbar from './Navbar';
import { auth } from '../auth';
import { redirect } from 'next/navigation';
import getSession from '@/lib/getSession';

export default async function DesktopNavbar() {
  const session = await getSession();
  const user = session?.user;
  // if (!user) {
  //   redirect('/sign-in'); // Redirect to homepage if the  user is unavailable
  // }

  let isAdmin = false;

  if (user?.role === 'ADMIN') {
    isAdmin = true;
  }

  return <Navbar />;
}
