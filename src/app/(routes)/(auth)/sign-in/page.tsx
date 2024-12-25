import { signIn } from '../../../../auth';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function SignInRoute() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Card>
        <CardHeader className="flex flex-col items-center justify-center">
          <div>
            <User className="size-14" />
          </div>
          <CardTitle className="font-bold text-2xl">Sign In</CardTitle>
          <CardDescription>Please sign in with your account.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col space-y-4 min-w-[320px] sm:min-w-[420px]">
          <div>
            <form
              action={async () => {
                'use server';

                await signIn('google', { redirectTo: '/home' });
              }}
            >
              <button
                className="rounded-md flex items-center justify-center border border-slate-300 py-2 px-4 text-center text-sm  shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-primary hover:border-primary focus:text-white focus:bg-slate-800 focus:border-slate-800 focus:scale-95 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none transition-all duration-300 w-full"
                type="submit"
              >
                <Image
                  src="https://docs.material-tailwind.com/icons/google.svg"
                  alt="metamask"
                  width={20}
                  height={20}
                  className="h-5 w-5 mr-2"
                />
                Continue with Google
              </button>
            </form>
          </div>
          <div>
            <form className="space-y-6">
              {/* E-mail Field */}
              <div>
                <Label className="block mb-1 text-sm font-medium text-gray-600">
                  E-mail
                </Label>
                <Input
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full px-4 py-2 text-sm border rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                />
              </div>
              {/* Password Field */}
              <div>
                <Label className="block mb-1 text-sm font-medium text-gray-600">
                  Password
                </Label>
                <Input
                  type="password"
                  placeholder="•••••••••••"
                  className="w-full px-4 py-2 text-sm border rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                />
              </div>
              {/* Sign-up Link */}
              <div className="flex items-center justify-center space-x-1 text-sm">
                <p>Don&apos;t have an account?</p>
                <Link className="text-primary hover:underline" href="/sign-up">
                  Sign up
                </Link>
              </div>
              {/* Sign In Button */}

              <Button className="w-full">Sign in</Button>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
