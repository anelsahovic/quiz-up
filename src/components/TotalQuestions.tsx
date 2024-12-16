import { CircleHelp } from 'lucide-react';
import { QuestionsByCategoryChart } from './QuestionsByCategoryChart';
import { getAllQuestions } from '@/lib/queries/questions/queries';

export default async function TotalQuestions() {
  const questions = await getAllQuestions();

  const formattedQuestions = questions.map((question) => ({
    category: question.category?.name ?? '',
  }));

  const chartData: { category: string; questions: number; fill: string }[] = [];

  const categoryCount: Record<string, number> = {};

  formattedQuestions.forEach((question) => {
    const category = question.category;
    if (category) {
      categoryCount[category] = (categoryCount[category] || 0) + 1;
    }
  });

  Object.entries(categoryCount).forEach(([category, count], index) => {
    chartData.push({
      category,
      questions: count,
      fill: `hsl(var(--chart-${index + 1}))`,
    });
  });

  if (chartData.length === 0) {
    chartData.push({
      category: 'No questions available',
      questions: 0,
      fill: 'hsl(var(--chart-1))',
    });
  }

  return (
    <div className="flex flex-col justify-between gap-1">
      <div>
        <h1>Total Questions</h1>
        <div className="flex items-center gap-1">
          <p className="text-sm text-slate-700">Showing number of questions</p>
          <CircleHelp className="size-4" />
        </div>
      </div>

      {/* Render the chart if there is data */}
      {questions.length > 0 ? (
        <QuestionsByCategoryChart chartData={chartData} />
      ) : (
        <div className="flex items-center justify-center w-full h-20">
          <p className="text-sm text-slate-700 italic">
            No questions available
          </p>
        </div>
      )}
    </div>
  );
}
