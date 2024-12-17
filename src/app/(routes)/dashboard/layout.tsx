import { DashboardSidebar } from '@/components/DashboardSidebar';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { checkIsAdmin } from '@/lib/helperFunctions';
import { getUserByClerkId, getUserById } from '@/lib/queries/users/queries';
import { SignOutButton } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const clerkUser = await currentUser();

  if (!clerkUser?.id) {
    return redirect('/'); // Redirect to homepage if the Clerk user is unavailable
  }

  const user = await getUserByClerkId(clerkUser.id);
  // Redirect unauthorized users
  if (user?.role !== 'ADMIN') {
    return redirect('/');
  }

  return (
    <SidebarProvider>
      <DashboardSidebar />
      <SidebarInset className="w-80">
        <header className="flex justify-between h-16 px-2 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar className="shadow-md">
                  <AvatarFallback className="text-primary">
                    {`${clerkUser?.firstName && clerkUser?.firstName[0]}${
                      clerkUser?.lastName && clerkUser?.lastName[0]
                    }`}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel className="my-0 pb-0">
                  {clerkUser?.fullName}
                </DropdownMenuLabel>
                <DropdownMenuLabel className="font-normal m-0 ml-1 p-0 px-1 text-slate-700">
                  @{clerkUser?.username}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/" className="w-full">
                    Home
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/dashboard" className="w-full">
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/my-profile" className="w-full">
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="w-full text-left">
                  <SignOutButton>
                    <button className="w-full text-left">Sign Out</button>
                  </SignOutButton>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <div className="flex h-full w-full mx-auto justify-center items-center p-3">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
