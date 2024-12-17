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
import { User } from '@/types/types';
import { updateUser } from '@/lib/actions/users/actions';
import { useForm } from '@conform-to/react';
import { userSchema } from '@/lib/zodSchemas';
import { parseWithZod } from '@conform-to/zod';

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
  let defaultFirstNameValue: string = '';
  let defaultLastNameValue: string = '';
  let defaultUsernameValue: string = '';
  let defaultEmailValue: string = '';
  let defaultRoleValue: string = '';
  let selectedAction = updateUser;

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
    defaultFirstNameValue = data.firstName;
    defaultLastNameValue = data.lastName;
    defaultUsernameValue = data.username;
    defaultEmailValue = data.email;
    defaultRoleValue = data.role;
  } else {
    defaultFirstNameValue = fields.firstName.initialValue as string;
    defaultLastNameValue = fields.lastName.initialValue as string;
    defaultUsernameValue = fields.username.initialValue as string;
    defaultEmailValue = fields.email.initialValue as string;
    defaultRoleValue = fields.role.initialValue as string;
  }
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
        <form
          className="flex flex-col gap-6 mt-6"
          id={form.id}
          onSubmit={form.onSubmit}
          action={action}
        >
          <input type="hidden" name="userId" id="questionId" value={data?.id} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* First Name */}
            <div>
              <Label htmlFor="first_name">First Name</Label>
              <Input
                name={fields.firstName.name}
                key={fields.firstName.key}
                defaultValue={defaultFirstNameValue}
                placeholder="John"
                readOnly={actionType === 'update'}
              />
              <p className="text-sm text-rose-500">{fields.firstName.errors}</p>
            </div>

            {/* Last Name */}
            <div>
              <Label htmlFor="last_name">Last Name</Label>
              <Input
                name={fields.lastName.name}
                key={fields.lastName.key}
                defaultValue={defaultLastNameValue}
                placeholder="Doe"
                readOnly={actionType === 'update'}
              />
              <p className="text-sm text-rose-500">{fields.lastName.errors}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Username */}
            <div>
              <Label htmlFor="username">Username</Label>
              <Input
                name={fields.username.name}
                key={fields.username.key}
                defaultValue={defaultUsernameValue}
                placeholder="john_doe"
                readOnly={actionType === 'update'}
              />
              <p className="text-sm text-rose-500">{fields.username.errors}</p>
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
              readOnly={actionType === 'update'}
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
