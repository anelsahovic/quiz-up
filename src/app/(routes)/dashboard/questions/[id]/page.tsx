import SubmitButton from '@/components/SubmitButton';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { deleteQuestion } from '@/lib/actions/questions/actions';
import { getCategoryById } from '@/lib/queries/categories/queries';
import { getQuestionById } from '@/lib/queries/questions/queries';
import { Pencil, SquareArrowLeft, Trash } from 'lucide-react';
import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ShowQuestion({ params }: Props) {
  const { id } = await params;
  const question = await getQuestionById(id);
  const category = await getCategoryById(question?.categoryId as string);
  if (!question) {
    return notFound();
  }
  return (
    <Card className="max-w-4xl mx-auto py-2 px-6 bg-white shadow-lg rounded-lg">
      <CardHeader className="flex border-b pb-4">
        <div className="flex items-center justify-between pb-4">
          <div>
            <Link href="/dashboard/questions">
              <SquareArrowLeft
                size={30}
                className="text-gray-700 hover:text-purple-600 transition-all duration-300"
              />
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href={`/dashboard/questions/${question?.id}/edit`}
              className={buttonVariants({ variant: 'secondary' })}
            >
              <Pencil />
            </Link>
            <AlertDialog>
              <AlertDialogTrigger className={`${buttonVariants()}`}>
                <Trash />
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    this question and remove its data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction asChild>
                    <form
                      action={async () => {
                        'use server';

                        deleteQuestion(id);
                        redirect(`/dashboard/questions`);
                      }}
                    >
                      <SubmitButton text="Delete" />
                    </form>
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            {question?.question}
          </h1>
        </div>
      </CardHeader>

      <CardContent className="mt-6 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-600">Category</span>
            <span className="text-lg font-bold text-blue-600">
              {category?.name}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-600">
              Difficulty
            </span>
            <span
              className={`text-lg font-bold w-fit p-1 rounded ${
                question?.difficulty === 'HARD'
                  ? 'text-rose-600 bg-rose-100'
                  : question?.difficulty === 'MEDIUM'
                  ? 'text-amber-600 bg-amber-100'
                  : 'text-lime-600 bg-lime-100 '
              }`}
            >
              {question?.difficulty}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-600">
              Created At
            </span>
            <span className="text-lg text-gray-800">
              {new Date(question?.createdAt).toLocaleDateString()}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-600">
              Updated At
            </span>
            <span className="text-lg text-gray-800">
              {new Date(question?.updatedAt).toLocaleDateString()}
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Answers</h2>
          <ul className="space-y-2">
            {question?.options.map((option, index) => (
              <li
                key={index}
                className={`p-3 rounded-lg ${
                  index === question?.correctAnswer
                    ? 'bg-green-100 text-green-800 font-bold shadow'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
