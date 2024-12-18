import LobbyForm from '@/components/LobbyForm';
import { getAllCategories } from '@/lib/queries/categories/queries';
import { Category } from '@/types/types';
import { SquareArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default async function Lobby() {
  const categories: Category[] = await getAllCategories();
  return (
    <div className="w-full h-screen max-h-screen bg-gradient-to-b from-primary to-[#7116bb] flex flex-col justify-evenly items-center p-2 py-5 relative">
      <div className="absolute top-2 left-2">
        <Link href="/" className="text-white/80 p-2">
          <SquareArrowLeft className="size-8" />
        </Link>
      </div>

      <div>
        <div className="flex items-center gap-1 sm:gap-3">
          <Image
            src="/quiz_up_logo.png"
            alt="logo"
            width={80}
            height={80}
            className="sm:size-32 md:size-48"
          />
          <div className="text-5xl sm:text-7xl md:text-8xl jersey_10_8cf6801b-module__g70_MG__className text-white">
            Quiz Up
          </div>
        </div>
      </div>
      <LobbyForm categories={categories} />
    </div>
  );
}
