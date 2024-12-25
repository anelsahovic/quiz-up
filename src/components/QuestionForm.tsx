'use client';

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
import { Category, Question } from '../../types/types';
import { useActionState } from 'react';
import {
  createQuestion,
  updateQuestion,
} from '@/lib/actions/questions/actions';
import { useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { questionSchema } from '@/lib/zodSchemas';

type Props = {
  data?: Question;
  buttonText?: string;
  formTitle: string;
  categories: Category[];
  selectedCategory?: string;
  actionType: 'update' | 'create';
};

export default function QuestionForm({
  data,
  buttonText,
  formTitle,
  categories,
  selectedCategory,
  actionType,
}: Props) {
  let defaultQuestionValue: string = '';
  let defaultAnswerOneValue: string = '';
  let defaultAnswerTwoValue: string = '';
  let defaultAnswerThreeValue: string = '';
  let defaultAnswerFourValue: string = '';
  let defaultCorrectAnswer: number = 0;
  let defaultDifficultyValue: string = '';
  let defaultCategoryValue: string = '';
  let selectedAction = createQuestion;

  if (actionType === 'create') {
    selectedAction = createQuestion;
  } else if (actionType === 'update') {
    selectedAction = updateQuestion;
  }

  const [lastResult, action] = useActionState(selectedAction, undefined);

  const [form, fields] = useForm({
    lastResult,

    onValidate({ formData }) {
      return parseWithZod(formData, {
        schema: questionSchema,
      });
    },

    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput',
  });
  if (data) {
    defaultQuestionValue = data.question;
    defaultAnswerOneValue = data.options[0];
    defaultAnswerTwoValue = data.options[1];
    defaultAnswerThreeValue = data.options[2];
    defaultAnswerFourValue = data.options[3];
    defaultCorrectAnswer = data.correctAnswer;
    defaultDifficultyValue = data.difficulty;
    defaultCategoryValue = selectedCategory as string;
  } else {
    defaultQuestionValue = fields.question.initialValue as string;
    defaultAnswerOneValue = fields.answerOne.initialValue as string;
    defaultAnswerTwoValue = fields.answerTwo.initialValue as string;
    defaultAnswerThreeValue = fields.answerThree.initialValue as string;
    defaultAnswerFourValue = fields.answerFour.initialValue as string;
    defaultCorrectAnswer = Number(fields.correctAnswer.initialValue) ?? 0;
    defaultDifficultyValue = fields.difficulty.initialValue as string;
    defaultCategoryValue = fields.categoryId.initialValue as string;
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
        <form
          className="flex flex-col gap-4 mt-4"
          id={form.id}
          onSubmit={form.onSubmit}
          action={action}
        >
          <input
            type="hidden"
            name="questionId"
            id="questionId"
            value={data?.id}
          />
          <div className="w-full">
            <Label>Question</Label>
            <Input
              key={fields.question.key}
              name={fields.question.name}
              defaultValue={defaultQuestionValue}
              placeholder="What is the capital city of Spain?"
            />
            <p className="text-rose-500 text-sm">{fields.question.errors}</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div>
                <Label>Answer 1</Label>
                <Input
                  key={fields.answerOne.key}
                  name={fields.answerOne.name}
                  defaultValue={defaultAnswerOneValue}
                  placeholder="London"
                />
                <p className="text-rose-500 text-sm">
                  {fields.answerOne.errors}
                </p>
              </div>
              <div>
                <Label>Answer 2</Label>
                <Input
                  key={fields.answerTwo.key}
                  name={fields.answerTwo.name}
                  defaultValue={defaultAnswerTwoValue}
                  placeholder="Berlin"
                />
                <p className="text-rose-500 text-sm">
                  {fields.answerTwo.errors}
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div>
                <Label>Answer 3</Label>
                <Input
                  key={fields.answerThree.key}
                  name={fields.answerThree.name}
                  defaultValue={defaultAnswerThreeValue}
                  placeholder="Madrid"
                />
                <p className="text-rose-500 text-sm">
                  {fields.answerThree.errors}
                </p>
              </div>
              <div>
                <Label>Answer 4</Label>
                <Input
                  key={fields.answerFour.key}
                  name={fields.answerFour.name}
                  defaultValue={defaultAnswerFourValue}
                  placeholder="Moscow"
                />
                <p className="text-rose-500 text-sm">
                  {fields.answerFour.errors}
                </p>
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
                  key={fields.correctAnswer.key}
                  name={fields.correctAnswer.name}
                  defaultValue={defaultCorrectAnswer + 1}
                />
              </div>
              <p className="text-rose-500 text-sm">
                {fields.correctAnswer.errors}
              </p>
            </div>
            <div className="w-full">
              <Label>Difficulty</Label>
              <Select
                key={fields.difficulty.key}
                name={fields.difficulty.name}
                defaultValue={defaultDifficultyValue}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="EASY">Easy</SelectItem>
                  <SelectItem value="MEDIUM">Medium</SelectItem>
                  <SelectItem value="HARD">Hard</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-rose-500 text-sm">
                {fields.difficulty.errors}
              </p>
            </div>
            <div className="w-full">
              <Label>Category</Label>
              <Select
                key={fields.categoryId.key}
                name={fields.categoryId.name}
                defaultValue={defaultCategoryValue}
              >
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
              <p className="text-rose-500 text-sm">
                {fields.categoryId.errors}
              </p>
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
