'use client';

import { Card, CardContent, CardHeader } from './ui/card';
import { SquareArrowLeft } from 'lucide-react';
import SubmitButton from './SubmitButton';
import { Input } from './ui/input';
import { Label } from './ui/label';
import Link from 'next/link';
import { Category } from '../../types/types';
import { useActionState } from 'react';
import {
  createCategory,
  updateCategory,
} from '@/lib/actions/categories/actions';
import { useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { categorySchema } from '@/lib/zodSchemas';

type Props = {
  data?: Category;
  buttonText?: string;
  formTitle: string;
  actionType: 'update' | 'create';
};

export default function CategoryForm({
  data,
  buttonText,
  formTitle,
  actionType,
}: Props) {
  let selectedAction = createCategory;
  if (actionType === 'create') {
    selectedAction = createCategory;
  } else if (actionType === 'update') {
    selectedAction = updateCategory;
  }

  const [lastResult, action] = useActionState(selectedAction, undefined);
  const [form, fields] = useForm({
    lastResult,

    onValidate({ formData }) {
      return parseWithZod(formData, {
        schema: categorySchema,
      });
    },

    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput',
  });

  let defaultName: string = '';
  if (data) {
    defaultName = data.name;
  } else {
    defaultName = fields.name.initialValue as string;
  }

  return (
    <Card className="max-w-4xl mx-auto py-2 px-6 bg-white shadow-lg rounded-lg">
      <CardHeader className="flex border-b pb-4">
        <div className="flex items-center justify-between pb-4">
          <div>
            <Link href="/dashboard/categories">
              <SquareArrowLeft
                size={30}
                className="text-gray-700 hover:text-primary transition-all duration-300"
              />
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <p>{new Date().toLocaleDateString()}</p>
          </div>
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center">
            {formTitle}
          </h1>
        </div>
      </CardHeader>
      <CardContent>
        <form
          className="flex flex-col gap-4 mt-4"
          id={form.id}
          onSubmit={form.onSubmit}
          action={action}
        >
          <input
            type="hidden"
            name="categoryId"
            id="categoryId"
            value={data?.id}
          />
          <div className="w-full">
            <Label>Category name</Label>
            <Input
              placeholder="Science"
              defaultValue={defaultName}
              name={fields.name.name}
              key={fields.name.key}
            />
            <p className="text-rose-500 text-sm">{fields.name.errors}</p>
          </div>

          <div>
            <SubmitButton text={buttonText ? buttonText : 'Create'} />
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
