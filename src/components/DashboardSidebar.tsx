'use client';

import * as React from 'react';
import {
  ChartLine,
  ChevronRight,
  FileQuestion,
  Hash,
  LogOut,
  Users,
} from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from '@/components/ui/sidebar';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from './ui/collapsible';
import Image from 'next/image';
import Link from 'next/link';

export function DashboardSidebar() {
  return (
    <Sidebar collapsible="icon" className="list-none">
      <SidebarHeader className="py-5 px-0 items-start">
        <SidebarMenuItem>
          <Link href="/home">
            <SidebarMenuButton>
              <Image
                src="/quiz_up_logo.png"
                alt="logo"
                width={45}
                height={45}
              />
              <h1 className="font-jersey10 text-4xl">Quiz Up</h1>
            </SidebarMenuButton>
          </Link>
        </SidebarMenuItem>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenuItem>
          <Link href="/dashboard">
            <SidebarMenuButton>
              <ChartLine />
              <span>Dashboard</span>
            </SidebarMenuButton>
          </Link>
        </SidebarMenuItem>

        <Collapsible className="group/collapsible">
          <SidebarMenuItem>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton>
                <FileQuestion />
                <span>Questions</span>
                <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
              </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarMenuSub>
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton asChild>
                    <Link href="/dashboard/questions">
                      <span>Show All</span>
                    </Link>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton asChild>
                    <Link href="/dashboard/questions/create">
                      <span>Create new</span>
                    </Link>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              </SidebarMenuSub>
            </CollapsibleContent>
          </SidebarMenuItem>
        </Collapsible>

        <Collapsible className="group/collapsible">
          <SidebarMenuItem>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton>
                <Users />
                <span>Users</span>
                <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
              </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarMenuSub>
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton asChild>
                    <Link href="/dashboard/users">
                      <span>Show All</span>
                    </Link>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton asChild>
                    <Link href="" className="opacity-50 cursor-not-allowed">
                      <span>Create new</span>
                    </Link>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              </SidebarMenuSub>
            </CollapsibleContent>
          </SidebarMenuItem>
        </Collapsible>

        <Collapsible className="group/collapsible">
          <SidebarMenuItem>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton>
                <Hash />
                <span>Categories</span>
                <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
              </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarMenuSub>
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton asChild>
                    <Link href="/dashboard/categories">
                      <span>Show All</span>
                    </Link>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton asChild>
                    <Link href="/dashboard/categories/create">
                      <span>Create new</span>
                    </Link>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              </SidebarMenuSub>
            </CollapsibleContent>
          </SidebarMenuItem>
        </Collapsible>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenuItem>
          <Link href="/home">
            <SidebarMenuButton className="flex items-center border-t">
              <LogOut className="rotate-180" />
              <span className="text-base">Exit Dashboard</span>
            </SidebarMenuButton>
          </Link>
        </SidebarMenuItem>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
