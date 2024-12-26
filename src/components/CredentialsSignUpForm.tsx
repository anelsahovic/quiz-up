'use client';

import { signUpUser } from '@/lib/actions/users/actions';
import { signUpSchema } from '@/lib/zodSchemas';
import { useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import React, { useActionState } from 'react';
import { Label } from './ui/label';
import { Input } from './ui/input';
import Link from 'next/link';
import SubmitButton from './SubmitButton';

export default function CredentialsSignUpForm() {
  const [lastResult, action] = useActionState(signUpUser, undefined);
  const [form, fields] = useForm({
    lastResult,

    onValidate({ formData }) {
      return parseWithZod(formData, { schema: signUpSchema });
    },

    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput',
  });

  const renderErrors = (error: Record<string, string[] | null>) => {
    return Object.entries(error).map(([field, messages]) => {
      if (messages) {
        return (
          <div key={field}>
            <ul>
              {messages.map((message, index) => (
                <li className="text-rose-500" key={index}>
                  {message}
                </li>
              ))}
            </ul>
          </div>
        );
      }
      return null;
    });
  };

  return (
    <form
      action={action}
      id={form.id}
      onSubmit={form.onSubmit}
      className="space-y-6"
    >
      {lastResult?.error && renderErrors(lastResult.error)}

      {/* Name Field */}
      <div>
        <Label className="block mb-1 text-sm font-medium text-gray-600">
          Name
        </Label>
        <Input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 text-sm border rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
          key={fields.name.key}
          name={fields.name.name}
          defaultValue={fields.name.initialValue as string}
        />
        <span className="text-rose-500">{fields.name.errors}</span>
      </div>
      {/* E-mail Field */}
      <div>
        <Label className="block mb-1 text-sm font-medium text-gray-600">
          E-mail
        </Label>
        <Input
          type="email"
          placeholder="example@gmail.com"
          className="w-full px-4 py-2 text-sm border rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
          key={fields.email.key}
          name={fields.email.name}
          defaultValue={fields.email.initialValue as string}
        />
        <span className="text-rose-500">{fields.email.errors}</span>
      </div>
      {/* Password Field */}
      <div>
        <Label className="block mb-1 text-sm font-medium text-gray-600">
          Password
        </Label>
        <Input
          type="password"
          placeholder="•••••••••••"
          className="w-full px-4 py-2 text-sm border rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
          key={fields.password.key}
          name={fields.password.name}
          defaultValue={fields.password.initialValue as string}
        />
        <span className="text-rose-500">{fields.password.errors}</span>
      </div>
      {/* Already Have an Account */}
      <div className="flex items-center justify-center space-x-1 text-sm ">
        <p>Already have an account?</p>
        <Link className="text-primary hover:underline" href="/sign-in">
          Sign in
        </Link>
      </div>
      {/* Sign Up Button */}
      <SubmitButton text="Sign Up" />
    </form>
  );
}
