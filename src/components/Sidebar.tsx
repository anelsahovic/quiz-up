import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';
import Image from 'next/image';
import SidebarLinks from './SidebarLinks';

type Props = {
  isAdmin: boolean;
};

export default function Sidebar({ isAdmin }: Props) {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent className="flex flex-col items-center justify-between bg-gradient-to-t from-primary to-[#7116bb] border-none">
          <SheetHeader className="items-center">
            <div className="flex items-center gap-1">
              <Image
                src="/quiz_up_logo.png"
                alt="logo"
                width={70}
                height={70}
                className=""
              />
              <SheetTitle className="text-5xl font-jersey10 text-white">
                Quiz Up
              </SheetTitle>
            </div>
            <SheetDescription className="text-slate-200">
              Find your favorite category and be the best
            </SheetDescription>
          </SheetHeader>

          <SidebarLinks isAdmin={isAdmin} />

          <SheetFooter className="text-slate-200">
            <small>&copy; 2024 QuizUp. All rights reserved.</small>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
