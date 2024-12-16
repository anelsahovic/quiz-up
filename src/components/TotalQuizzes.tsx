import { Gamepad } from 'lucide-react';
import { QuizzesPlayedRadialChart } from './QuizzesPlayedRadialChart';
import { getAllResults } from '@/lib/queries/results/queries';

export default async function TotalQuizzes() {
  const results = (await getAllResults()) ?? [];
  const data = [{ gamesPlayed: results.length }];

  return (
    <div className="flex flex-col justify-between gap-1">
      <div>
        <h1 className="">Total Quizzes</h1>
        <div className="flex items-center gap-1">
          <p className="text-sm text-slate-700">
            Showing number of all quizzes played
          </p>
          <Gamepad className="size-4" />
        </div>
      </div>
      {results?.length ? (
        <QuizzesPlayedRadialChart data={data} />
      ) : (
        <div className="flex items-center justify-center w-full h-20">
          <p className="text-sm text-slate-700 italic">No quizzes played</p>
        </div>
      )}
    </div>
  );
}
