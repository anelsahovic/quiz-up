import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <main className="h-screen flex items-center justify-center p-3">
      <SignIn />
    </main>
  );
}
