import { Card, CardContent, CardHeader } from './ui/card';
import { SquareArrowLeft } from 'lucide-react';
import SubmitButton from './SubmitButton';
import { Input } from './ui/input';
import { Label } from './ui/label';
import Link from 'next/link';
import { Category } from '@/types/types';

type Props = {
  data?: Category;
  buttonText?: string;
  formTitle: string;
};

export default function CategoryForm({ data, buttonText, formTitle }: Props) {
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
        <form className="flex flex-col gap-4 mt-4">
          <div className="w-full">
            <Label>Category name</Label>
            <Input placeholder="Science" defaultValue={data?.name} />
          </div>

          <div>
            <SubmitButton text={buttonText ? buttonText : 'Create'} />
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
