'use client';

import Image from 'next/image';
import Link from 'next/link';
import Sidebar from './Sidebar';
import { Play } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { User } from 'next-auth';

export default function Navbar() {
  const pathname = usePathname();
  const shouldHide =
    pathname === '/' ||
    pathname.startsWith('/dashboard') ||
    pathname.startsWith('/sign-in') ||
    pathname.startsWith('/sign-up') ||
    pathname.startsWith('/lobby') ||
    pathname.startsWith('/play');
  return (
    <div
      className={`${
        shouldHide ? 'hidden' : ''
      } px-6 fixed sm:w-[650px] md:w-[700px] left-1/2 transform -translate-x-1/2 top-4`}
    >
      <div className="hidden relative sm:flex py-2 px-6 items-center justify-between max-w-4xl mx-auto rounded-full shadow-lg bg-gradient-to-t from-primary to-[#7116bb] text-white">
        <div className="w-1/3">
          <Link href="/home" className="flex items-center gap-2 justify-center">
            <Image src="/quiz_up_logo.png" alt="logo" width={45} height={45} />
            <h1 className="font-jersey10 text-4xl">Quiz Up</h1>
          </Link>
        </div>
        <div className=" ">
          <Link
            href="/lobby"
            className=" py-2 px-3 flex justify-center items-center gap-2 text-fuchsia-200 border-2 rounded-lg border-fuchsia-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#ff00dd,0_0_15px_#ff00dd,0_0_30px_#ff00dd] animate-pulse duration-1000"
          >
            <Play /> Play
          </Link>
        </div>
        <div className="w-1/3 flex justify-center items-center">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
