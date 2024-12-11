'use client';

import Image from 'next/image';
import Link from 'next/link';
import Sidebar from './Sidebar';
import { Play } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className={`${pathname === '/dashboard' && 'hidden'} px-6`}>
      <div className="hidden relative sm:flex py-2 px-6 items-center justify-between max-w-4xl mt-2 mx-auto rounded-full shadow-lg bg-gradient-to-t from-primary to-[#7116bb] text-white">
        <div className="w-1/3">
          <Link href="/" className="flex items-center gap-2 justify-center">
            <Image src="/quiz_up_logo.png" alt="logo" width={45} height={45} />
            <h1 className="jersey_10_8cf6801b-module__g70_MG__className text-4xl">
              Quiz Up
            </h1>
          </Link>
        </div>
        <div className="hidden lg:flex ">
          <Link
            href="/play"
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
