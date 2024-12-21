import { getCategoryById } from '@/lib/queries/categories/queries';
import { getQuizQuestionsWithRetry } from '@/lib/queries/questions/queries';
import { DifficultyLevel } from '@prisma/client';
import Link from 'next/link';
import { buttonVariants } from './ui/button';
import { XCircle } from 'lucide-react';
import QuizForm from './QuizForm';
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
} from './ui/alert-dialog';
import LoadingQuiz from './LoadingQuiz';
import { getUserByClerkIdWithRetry } from '@/lib/queries/users/queries';

type Props = {
  searchParams: Promise<{
    category: string;
    questions: string;
    difficulty: string;
  }>;
  clerkUserId: string;
};

export default async function PlayQuiz({ searchParams, clerkUserId }: Props) {
  const user = await getUserByClerkIdWithRetry(clerkUserId);

  const { category, questions, difficulty } = await searchParams;
  const fetchedCategory = await getCategoryById(category);
  const quizQuestions = await getQuizQuestionsWithRetry(
    fetchedCategory?.id as string,
    difficulty as DifficultyLevel,
    Number(questions)
  );

  if (!user) {
    return <LoadingQuiz text="Fetching user data..." />;
  }
  if (!fetchedCategory) {
    return <LoadingQuiz text="Loading category..." />;
  }

  if (!fetchedCategory || quizQuestions?.length === 0) {
    return (
      <div className="w-screen h-screen flex flex-col items-center justify-center p-2 text-white gap-4 bg-gradient-to-b from-primary to-[#7116bb]">
        <h1 className="uppercase text-base font-semibold sm:text-xl md:text-2xl">
          Invalid quiz data
        </h1>
        <Link
          className={buttonVariants({ variant: 'secondary' })}
          href="/lobby"
        >
          Back to Lobby
        </Link>
      </div>
    );
  }
  return (
    <div className="h-screen w-screen p-6 sm:p-4 flex flex-col items-center justify-evenly relative text-white bg-gradient-to-b from-primary to-[#7116bb]">
      {/* Close Button */}
      <div className="absolute top-2 left-2 ">
        <AlertDialog>
          <AlertDialogTrigger>
            <XCircle />
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Are you sure you want to exit?
              </AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will delete current progress
                and redirect you to home page.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className="flex flex-row gap-2 items-center justify-end">
              <AlertDialogCancel className="p-2 m-0">Cancel</AlertDialogCancel>
              <AlertDialogAction>
                <Link className={`${buttonVariants()} m-0 p-0`} href="/home">
                  Exit
                </Link>
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
      <QuizForm
        questions={quizQuestions}
        category={fetchedCategory}
        userId={user?.id as string}
      />
    </div>
  );
}
