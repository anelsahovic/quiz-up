'use client';
import { redirect } from 'next/navigation';
import bcrypt from 'bcryptjs';

export function saltAndHashPassword(password: string) {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds); // Generate a salt
  const hashedPassword = bcrypt.hashSync(password, salt); // Hash the password with the salt
  return hashedPassword;
}
