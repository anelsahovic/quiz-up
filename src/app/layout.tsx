import type { Metadata } from 'next';
import { Jersey_10, Inter } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';

const inter = Inter({ subsets: ['latin'] });

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const jersey10 = Jersey_10({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'QuizUp',
  description:
    'Test your knowledge and have fun with our engaging quiz app! Explore a wide variety of categories, challenge friends, track your progress, and sharpen your skills. Start playing now!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} antialiased`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
