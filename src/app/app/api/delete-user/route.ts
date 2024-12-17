import { clerkClient } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export async function DELETE(clerkUserId: string) {
  try {
    const client = await clerkClient();
    await client.users.deleteUser(clerkUserId);
    return NextResponse.json({ message: 'User deleted' });
  } catch (error) {
    return NextResponse.json({ error: 'Error deleting user' });
  }
}
