import React from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import Link from 'next/link';
import { SquareArrowLeft } from 'lucide-react';
import { Label } from './ui/label';
import { Input } from './ui/input';
import SubmitButton from './SubmitButton';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { User } from '@/types/types';

type Props = {
  data?: User;
  buttonText?: string;
  formTitle: string;
};

export default function UserForm({ buttonText, formTitle, data }: Props) {
  return (
    <Card className="max-w-4xl mx-auto py-6 px-8 bg-white shadow-lg rounded-lg">
      <CardHeader className="flex flex-col items-center border-b pb-4">
        <div className="w-full flex justify-between items-center">
          <Link href="/dashboard/users">
            <SquareArrowLeft
              size={30}
              className="text-gray-700 hover:text-primary transition-all duration-300"
            />
          </Link>
          <p className="text-gray-500">{new Date().toLocaleDateString()}</p>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-4 text-center">
          {formTitle}
        </h1>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-6 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* First Name */}
            <div>
              <Label htmlFor="first_name">First Name</Label>
              <Input
                id="first_name"
                defaultValue={data?.firstName}
                placeholder="John"
              />
            </div>

            {/* Last Name */}
            <div>
              <Label htmlFor="last_name">Last Name</Label>
              <Input
                id="last_name"
                defaultValue={data?.lastName}
                placeholder="Doe"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Username */}
            <div>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                defaultValue={data?.username}
                placeholder="john_doe"
              />
            </div>

            {/* Role */}
            <div>
              <Label htmlFor="role">Role</Label>
              <Select defaultValue={data?.role}>
                <SelectTrigger>
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ADMIN">Admin</SelectItem>
                  <SelectItem value="PLAYER">Player</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Email */}
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              defaultValue={data?.email}
              placeholder="john.doe@example.com"
            />
          </div>

          {/* Password */}
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="********"
              className="pr-10"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <div>
              <SubmitButton text={buttonText ? buttonText : 'Create'} />
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
