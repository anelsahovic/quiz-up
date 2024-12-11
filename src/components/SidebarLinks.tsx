'use client';

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from '@clerk/nextjs';
import {
  ChevronLeft,
  ChevronRight,
  LogIn,
  LogOut,
  MonitorCog,
  Play,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SheetTrigger } from './ui/sheet';

const sidebarLinks = [
  {
    href: '/',
    title: 'Home',
    id: 0,
  },
  {
    href: '/scoreboard',
    title: 'Scoreboard',
    id: 1,
  },
];
const infoLinks = [
  {
    href: '/my-profile',
    title: 'My Profile',
    id: 0,
  },
  {
    href: '/about',
    title: 'About',
    id: 1,
  },
];

export default function SidebarLinks() {
  const pathname = usePathname();
  return (
    <div className="flex flex-col items-center justify-center h-full gap-5">
      <SheetTrigger asChild>
        <Link
          className="flex gap-1 uppercase font-bold text-white p-1  border-slate-800 hover:scale-105 transition-all duration-300"
          href="/dashboard"
        >
          <MonitorCog />
          Dashboard
        </Link>
      </SheetTrigger>
      <SheetTrigger asChild>
        <Link
          className="flex uppercase font-bold  py-2 px-3  justify-center items-center gap-2 text-fuchsia-200 border-2 rounded-lg border-fuchsia-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#ff00dd,0_0_15px_#ff00dd,0_0_30px_#ff00dd] animate-pulse duration-1000"
          href="/play"
        >
          <Play />
          Play New Quiz
        </Link>
      </SheetTrigger>
      <div className="flex flex-col items-center text-white mt-5">
        <h1 className="font-semibold underline uppercase mb-1">Links</h1>
        {sidebarLinks.map((link) => (
          <SheetTrigger key={link.id} asChild>
            <Link className="flex items-center" href={link.href}>
              {pathname === link.href && <ChevronRight size={15} />}{' '}
              {link.title} {pathname === link.href && <ChevronLeft size={15} />}
            </Link>
          </SheetTrigger>
        ))}
      </div>
      <div className="flex flex-col items-center text-white">
        <h1 className="font-semibold underline uppercase mb-1">Info</h1>
        {infoLinks.map((link) => (
          <SheetTrigger key={link.id} asChild>
            <Link className="flex items-center" key={link.id} href={link.href}>
              {pathname === link.href && <ChevronRight size={15} />}{' '}
              {link.title}
              {pathname === link.href && <ChevronLeft size={15} />}
            </Link>
          </SheetTrigger>
        ))}
      </div>
      <div className="flex flex-col items-center mt-5">
        <SignedIn>
          <SignOutButton>
            <button className="py-1 px-2 text-white flex gap-1 ring-1 ring-white">
              <LogOut /> Sign Out
            </button>
          </SignOutButton>
        </SignedIn>
        <SignedOut>
          <SignInButton>
            <button className="py-1 px-2 text-white flex gap-1 ring-1 ring-white">
              <LogIn /> Sign in
            </button>
          </SignInButton>
        </SignedOut>
      </div>
    </div>
  );
}
