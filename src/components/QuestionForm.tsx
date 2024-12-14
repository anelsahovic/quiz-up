import Link from 'next/link';
import { Card, CardContent, CardHeader } from './ui/card';
import { ListOrdered, SquareArrowLeft } from 'lucide-react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import SubmitButton from './SubmitButton';
import {
  getAllCategories,
  getCategoryById,
} from '@/lib/queries/categories/queries';
import { Question } from '@/types/types';

type Props = {
  data?: Question;
  buttonText?: string;
  formTitle: string;
};

export default async function QuestionForm({
  data,
  buttonText,
  formTitle,
}: Props) {
  const categories = await getAllCategories();

  let selectedCategory: { id: string; name: string } | null = null;

  if (data) {
    selectedCategory = await getCategoryById(data?.categoryId as string);
  }

  return (
    <Card className="max-w-4xl mx-auto py-2 px-6 bg-white shadow-lg rounded-lg">
      <CardHeader className="flex border-b pb-4">
        <div className="flex items-center justify-between pb-4">
          <div>
            <Link href="/dashboard/questions">
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
            <Label>Question</Label>
            <Input
              defaultValue={data?.question}
              placeholder="What is the capital city of Spain?"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div>
                <Label>Answer 1</Label>
                <Input defaultValue={data?.options[0]} placeholder="London" />
              </div>
              <div>
                <Label>Answer 2</Label>
                <Input defaultValue={data?.options[1]} placeholder="Berlin" />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div>
                <Label>Answer 3</Label>
                <Input defaultValue={data?.options[2]} placeholder="Madrid" />
              </div>
              <div>
                <Label>Answer 4</Label>
                <Input defaultValue={data?.options[3]} placeholder="Moscow" />
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 ">
            <div className="w-full">
              <Label className="whitespace-nowrap">Correct Answer</Label>
              <div className="flex items-center">
                <span className="p-2 text-white text-sm bg-slate-700 rounded rounded-r-none">
                  <ListOrdered className="size-5" />
                </span>
                <Input
                  className="rounded-l-none "
                  type="number"
                  min={1}
                  max={4}
                  placeholder="1"
                  defaultValue={Number(data?.correctAnswer) + 1}
                />
              </div>
            </div>
            <div className="w-full">
              <Label>Difficulty</Label>
              <Select defaultValue={data?.difficulty}>
                <SelectTrigger>
                  <SelectValue placeholder="Select difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="EASY">Easy</SelectItem>
                  <SelectItem value="MEDIUM">Medium</SelectItem>
                  <SelectItem value="HARD">Hard</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full">
              <Label>Category</Label>
              <Select defaultValue={selectedCategory?.id}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex justify-end mt-4">
            <div>
              <SubmitButton text={buttonText ? buttonText : 'Create'} />
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
