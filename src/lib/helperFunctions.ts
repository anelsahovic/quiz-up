'use server';
import { redirect } from 'next/navigation';

export const checkIsAdmin = async (userRole: string) => {
  if (userRole !== 'ADMIN') {
    redirect('/');
  }
};
