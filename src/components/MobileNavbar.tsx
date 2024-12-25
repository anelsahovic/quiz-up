import BottomNav from './BottomNav';
import getSession from '@/lib/getSession';

export default async function MobileNavbar() {
  const session = await getSession();
  const user = session?.user;
  // if (!user) {
  //   redirect('/sign-in'); // Redirect to homepage if the  user is unavailable
  // }

  return <BottomNav />;
}
