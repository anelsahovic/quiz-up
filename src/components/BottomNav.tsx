'use client';

import { House, Medal, Play, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Sidebar from './Sidebar';

export default function BottomNav() {
  const pathname = usePathname();

  const shouldHide =
    pathname === '/' ||
    pathname.startsWith('/sign-in') ||
    pathname.startsWith('/sign-up') ||
    pathname.startsWith('/dashboard') ||
    pathname.startsWith('/lobby') ||
    pathname.startsWith('/play');
  return (
    <nav
      className={`bg-white ${
        shouldHide ? 'hidden' : ''
      } fixed bottom-0 w-full sm:hidden `}
    >
      <div className="flex items-center justify-around py-3 px-2 border-t">
        <div>
          <Link href="/home">
            <House className={`${pathname === '/home' && 'text-primary'}`} />
          </Link>
        </div>
        <div>
          <Link href="/leaderboard">
            <Medal
              className={`${pathname === '/leaderboard' && 'text-primary'}`}
            />
          </Link>
        </div>
        <div>
          <Link href="/lobby">
            <div
              className={`bg-gradient-to-t from-primary to-[#7116bb] text-white px-4 py-2 rounded-full ${
                pathname === '/lobby' &&
                'text-fuchsia-500 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_2px_#ff00dd,0_0_5px_#ff00dd,0_0_15px_#ff00dd]'
              }`}
            >
              <Play />
            </div>
          </Link>
        </div>
        <div>
          <Link href="/my-profile">
            <User
              className={`${pathname === '/my-profile' && 'text-primary'}`}
            />
          </Link>
        </div>
        <Sidebar />
      </div>
    </nav>
  );
}
