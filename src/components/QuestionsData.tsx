import { getAllQuestions } from '@/lib/queries/questions/queries';
import DataTable from './DataTable';

export default async function QuestionsData() {
  const questions = await getAllQuestions();
  const formattedQuestions = questions.map((question) => ({
    id: question.id,
    question: question.question.slice(0, 10) + '...',
    options: question.options,
    correctAnswer: question.options[question.correctAnswer],
    category: question.category.name,
    difficulty: question.difficulty,
    createdAt: new Date(question.createdAt).toLocaleDateString(),
    updatedAt: new Date(question.updatedAt).toLocaleDateString(),
  }));

  return <DataTable data={formattedQuestions} type="questions" />;
}
