import { auth } from '../../../auth';
import LobbyForm from '@/components/LobbyForm';
import { getAllCategories } from '@/lib/queries/categories/queries';
import { Category } from '../../../../types/types';
import { SquareArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import getSession from '@/lib/getSession';

export default async function Lobby() {
  const session = await getSession();
  const user = session?.user;
  if (!user) {
    redirect('/sign-in'); // Redirect to homepage if the  user is unavailable
  }
  const categories: Category[] = await getAllCategories();
  return (
    <div className="w-full h-screen  bg-gradient-to-b from-primary to-[#7116bb] flex flex-col justify-around items-center p-2 py-4 relative">
      <div className="absolute top-2 left-2">
        <Link href="/home" className="text-white/80 p-2">
          <SquareArrowLeft className="size-8" />
        </Link>
      </div>

      <div className="flex items-center gap-1 sm:gap-3">
        <Image
          src="/quiz_up_logo.png"
          alt="logo"
          width={80}
          height={80}
          className="sm:size-32 md:size-48"
        />
        <div className="text-5xl sm:text-7xl md:text-8xl font-jersey10 text-white">
          Quiz Up
        </div>
      </div>

      <LobbyForm categories={categories} />
    </div>
  );
}
