'use client';

import { signInUser } from '@/lib/actions/users/actions';
import React, { useActionState } from 'react';
import { Label } from './ui/label';
import { Input } from './ui/input';
import Link from 'next/link';
import { useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { signInSchema } from '@/lib/zodSchemas';
import SubmitButton from './SubmitButton';

export default function CredentialsSignInForm() {
  const [lastResult, action] = useActionState(signInUser, undefined);
  const [form, fields] = useForm({
    lastResult,

    onValidate({ formData }) {
      return parseWithZod(formData, {
        schema: signInSchema,
      });
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
      className="space-y-6"
      action={action}
      id={form.id}
      onSubmit={form.onSubmit}
    >
      {lastResult?.error && renderErrors(lastResult.error)}

      {/* E-mail Field */}
      <div className="flex flex-col gap-y-2">
        <Label>E-mail</Label>
        <Input
          type="email"
          required
          placeholder="example@mail.com"
          key={fields.email.key}
          name={fields.email.name}
          defaultValue={fields.email.initialValue as string}
        />
        {/* Display Field Validation Errors */}

        <span className="text-rose-500">{fields.email.errors}</span>
      </div>

      <div className="flex flex-col gap-y-2">
        <Label>Password</Label>
        <Input
          type="password"
          placeholder="••••••••"
          key={fields.password.key}
          name={fields.password.name}
          defaultValue={fields.password.initialValue as string}
        />

        <span className="text-rose-500">{fields.password.errors}</span>
      </div>

      {/* Sign-up Link */}
      <div className="flex items-center justify-center space-x-1 text-sm">
        <p>Don&apos;t have an account?</p>
        <Link className="text-primary hover:underline" href="/sign-up">
          Sign up
        </Link>
      </div>
      {/* Sign In Button */}

      <SubmitButton text="Sign In" />
    </form>
  );
}
