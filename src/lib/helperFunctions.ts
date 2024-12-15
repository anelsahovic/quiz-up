'use client';
import { useRouter } from 'next/router';

export function redirectToPage(url: string) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  router.push(url);
}
