import NextAuth from 'next-auth';
import type { Adapter } from 'next-auth/adapters';
import Google from 'next-auth/providers/google';
import prisma from './lib/db';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import Credentials from 'next-auth/providers/credentials';
import { getUserFromDb } from './lib/queries/users/queries';
import { compare } from 'bcrypt';
import { Role } from '@prisma/client';

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma) as Adapter,

  providers: [
    Google,
    Credentials({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // Check user against database
        const user = await getUserFromDb(credentials.email as string);

        if (!user) {
          throw new Error('Invalid email address'); // No user found
        }
        // Verify the password using bcrypt
        const isPasswordValid = await compare(
          credentials.password as string,
          user.password
        );

        if (!isPasswordValid) {
          throw new Error('Invalid password'); // Invalid password
        }

        // Return user object in the format expected by NextAuth
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          image: user.image,
        };
      },
    }),
  ],
  pages: {
    signIn: '/sign-in',
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
        session.user.role = token.role as Role;
      }
      return session;
    },
  },
  trustHost: true,
});
