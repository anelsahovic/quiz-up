'use client';

import { useActionState } from 'react';
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
import { User } from '../../types/types';
import { createUser, updateUser } from '@/lib/actions/users/actions';
import { useForm } from '@conform-to/react';
import { userSchema } from '@/lib/zodSchemas';
import { parseWithZod } from '@conform-to/zod';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

type Props = {
  data?: User;
  buttonText?: string;
  formTitle: string;
  actionType: 'update' | 'create';
};

export default function UserForm({
  buttonText,
  formTitle,
  data,
  actionType,
}: Props) {
  let defaultNameValue: string = '';
  let defaultImageValue: string = '';
  let defaultEmailValue: string = '';
  let defaultRoleValue: string = '';
  let selectedAction = createUser;

  if (actionType === 'create') {
    selectedAction = createUser;
  } else if (actionType === 'update') {
    selectedAction = updateUser;
  }

  const [lastResult, action] = useActionState(selectedAction, undefined);
  const [form, fields] = useForm({
    lastResult,

    onValidate({ formData }) {
      return parseWithZod(formData, {
        schema: userSchema,
      });
    },

    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput',
  });

  if (data) {
    defaultNameValue = data.name as string;
    defaultImageValue = data.image as string;
    defaultEmailValue = data.email;
    defaultRoleValue = data.role;
  } else {
    defaultNameValue = fields.name.initialValue as string;
    defaultImageValue = fields.image.initialValue as string;
    defaultEmailValue = fields.email.initialValue as string;
    defaultRoleValue = fields.role.initialValue as string;
  }
  return (
    <Card className="max-w-4xl mx-auto py-6 px-8 bg-white shadow-lg rounded-lg">
      <CardHeader className="flex flex-col items-center border-b">
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
        <form
          className="flex flex-col gap-6 mt-6"
          id={form.id}
          onSubmit={form.onSubmit}
          action={action}
        >
          <input type="hidden" name="userId" id="userId" value={data?.id} />
          <div className="flex flex-col w-full gap-1 justify-center items-center pb-4 border-b">
            <Avatar className="size-24 border-2 border-primary shadow-md">
              {data?.image ? (
                <AvatarImage src={data?.image} />
              ) : (
                <AvatarFallback className="bg-slate-700 text-white font-bold">
                  N/A
                </AvatarFallback>
              )}
            </Avatar>
            <div className="w-full text-center">
              <Label htmlFor="image">Image Url</Label>
              <Input
                name={fields.image.name}
                key={fields.image.key}
                defaultValue={defaultImageValue}
                placeholder="https://imageurl.com"
              />
              <p className="text-sm text-rose-500">{fields.image.errors}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/*  Name */}
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                name={fields.name.name}
                key={fields.name.key}
                defaultValue={defaultNameValue}
                placeholder="John"
              />
              <p className="text-sm text-rose-500">{fields.name.errors}</p>
            </div>

            {/* Role */}
            <div>
              <Label htmlFor="role">Role</Label>
              <Select
                defaultValue={defaultRoleValue}
                name={fields.role.name}
                key={fields.role.key}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ADMIN">Admin</SelectItem>
                  <SelectItem value="PLAYER">Player</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-rose-500">{fields.role.errors}</p>
            </div>
          </div>

          {/* Email */}
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              name={fields.email.name}
              key={fields.email.key}
              type="email"
              defaultValue={defaultEmailValue}
              placeholder="john.doe@example.com"
            />
            <p className="text-sm text-rose-500">{fields.email.errors}</p>
          </div>

          {/* Password */}
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              placeholder="********"
              className="pr-10"
              readOnly={actionType === 'update'}
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
