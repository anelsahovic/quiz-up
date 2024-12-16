import React from 'react';

type Props = {
  data: {
    name: { firstName: string; lastName: string } | null;
    correctAnswers: number;
    questionsPlayed: number;
  }[];
};

export default function RecentQuizzesList({ data }: Props) {
  return (
    <div className="overflow-y-scroll max-h-56">
      <div className="flex flex-col rounded h-full gap-1 space-y-2">
        {data.map((quizPlayed, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 border-b shadow-sm rounded hover:bg-slate-100 transition-colors duration-300"
          >
            {/* Quiz Name */}
            <div className="flex items-center gap-1 text-base font-semibold text-gray-800">
              <p>{quizPlayed.name?.firstName}</p>
              <p>{quizPlayed.name?.lastName}</p>
            </div>

            {/* Answers & Total Questions */}
            <div className="flex flex-col items-center">
              <span className="uppercase text-xs text-slate-700">Score</span>
              <div className="flex space-x-2">
                <span className="text-green-600 font-semibold">
                  {quizPlayed.correctAnswers}
                </span>
                <span className="text-gray-400">/</span>
                <span className="text-gray-600">
                  {quizPlayed.questionsPlayed}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
