import { DifficultyLevel } from '@prisma/client';
import { Button, buttonVariants } from './ui/button';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  correctAnswers: number;
  totalQuestions: number;
  category: { id: string; name: string };
  difficulty: DifficultyLevel;
  userId: string;
};

export default function ResultCard({
  correctAnswers,
  totalQuestions,
  category,
  difficulty,
  userId,
}: Props) {
  const scorePercentage = Math.round((correctAnswers / totalQuestions) * 100);

  const earnedPoints: number =
    difficulty === 'EASY'
      ? correctAnswers * 1
      : difficulty === 'MEDIUM'
      ? correctAnswers * 2
      : difficulty === 'HARD'
      ? correctAnswers * 3
      : 0;

  const maxPoints: number =
    difficulty === 'EASY'
      ? totalQuestions * 1
      : difficulty === 'MEDIUM'
      ? totalQuestions * 2
      : difficulty === 'HARD'
      ? totalQuestions * 3
      : 0;

  return (
    <div className="bg-[#1a041d50] p-8 rounded-lg shadow-xl max-w-xl mx-auto space-y-8">
      {/* Header Section */}
      <div className="flex flex-col items-center space-y-4">
        {scorePercentage >= 75 ? (
          <Image
            src="/trophy.png"
            alt="Trophy-Icon"
            width={80}
            height={80}
            className="mb-2"
          />
        ) : scorePercentage >= 50 ? (
          <Image
            src="/good.png"
            alt="Thumbs-Up-Icon"
            width={80}
            height={80}
            className="mb-2"
          />
        ) : (
          <Image
            src="/bad.png"
            alt="Sad-Icon"
            width={80}
            height={80}
            className="mb-2"
          />
        )}
        <h2 className="text-2xl font-extrabold text-gray-100 tracking-wide">
          {scorePercentage >= 75
            ? 'Excellent Job!'
            : scorePercentage >= 50
            ? 'Good Effort!'
            : 'Better Luck Next Time!'}
        </h2>
        <h3
          className={`text-3xl font-bold ${
            scorePercentage >= 75
              ? 'text-green-500'
              : scorePercentage >= 50
              ? 'text-yellow-500'
              : 'text-red-500'
          }`}
        >
          {scorePercentage}% Score
        </h3>

        <p
          className={`inline-block font-bold rounded-full px-3 py-1 shadow-sm mt-2 ${
            scorePercentage >= 75
              ? 'bg-green-500/20 text-green-600'
              : scorePercentage >= 50
              ? 'bg-yellow-500/20 text-yellow-600'
              : 'bg-red-500/20 text-red-600'
          }`}
        >
          {earnedPoints} / {maxPoints} pts
        </p>
      </div>

      {/* Quiz Summary */}
      <div className="bg-[#22062557] p-6 rounded-lg shadow-md">
        <p className="text-lg font-medium text-white mb-2">
          Quiz completed successfully!
        </p>

        <p className="text-white items-center">
          You answered{' '}
          <span className="text-blue-600 font-bold">{correctAnswers}</span> /{' '}
          <span className="text-slate-300 text-sm">{totalQuestions}</span>{' '}
          questions correct.
        </p>
      </div>

      {/* Quiz Details */}
      <div className="flex gap-1 justify-around text-base">
        <div className="flex">
          <p className="text-slate-200 flex flex-col items-center capitalize">
            <strong className=" text-fuchsia-200 capitalize">Category:</strong>
            <span>{category.name}</span>
          </p>
        </div>
        <div className="flex">
          <p className="text-slate-200 flex flex-col items-center">
            <strong className=" text-sky-200">Difficulty:</strong>
            <span>{difficulty}</span>
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center space-x-4 mt-6">
        <Button variant="secondary">Share Results</Button>

        <Link className={buttonVariants()} href="/home">
          Home
        </Link>
      </div>
    </div>
  );
}
