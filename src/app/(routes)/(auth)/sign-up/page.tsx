import { signIn } from '@/auth';
import CredentialsSignUpForm from '@/components/CredentialsSignUpForm';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { UserPlus } from 'lucide-react';
import Image from 'next/image';

export default function SignUpRoute() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Card>
        <CardHeader className="flex flex-col items-center justify-center">
          <div>
            <UserPlus className="size-14" />
          </div>
          <CardTitle className="font-bold text-2xl">Sign Up</CardTitle>
          <CardDescription>Create an account to get started.</CardDescription>
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
            <CredentialsSignUpForm />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
