import { List } from 'lucide-react';
import RecentQuizzesList from './RecentQuizzesList';
import { getAllResults } from '@/lib/queries/results/queries';
import { getUserName } from '@/lib/queries/users/queries';

export default async function RecentQuizzes() {
  const results = (await getAllResults()) ?? [];

  const data = await Promise.all(
    results.map(async (result) => {
      return {
        name: await getUserName(result.userId),
        correctAnswers: result.correctlyAnswered,
        questionsPlayed: result.numberOfQuestions,
      };
    })
  );

  return (
    <div className="flex flex-col justify-between gap-1">
      <div>
        <h1 className="">Recent Quizzes</h1>
        <div className="flex items-center gap-1">
          <p className="text-sm text-slate-700">
            Showing recently played quizzes
          </p>
          <List className="size-4" />
        </div>
      </div>
      {data.length ? (
        <RecentQuizzesList data={data} />
      ) : (
        <div className="flex items-center justify-center w-full h-20">
          <p className="text-sm text-slate-700 italic">No recent results</p>
        </div>
      )}
    </div>
  );
}
