'use client';

import { CheckCircle, Hash, OctagonAlert, XCircle } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { useActionState, useEffect, useState } from 'react';
import { Button } from './ui/button';
import SubmitButton from './SubmitButton';
import { Question, Result } from '@/types/types';
import Loading from './Loading';
import LoadingQuiz from './LoadingQuiz';
import Image from 'next/image';
import { parseWithZod } from '@conform-to/zod';
import { answersSchema } from '@/lib/zodSchemas';
import { useForm } from '@conform-to/react';
import ResultCard from './ResultCard';
import { saveResult } from '@/lib/actions/results/actions';

type Props = {
  questions: Question[] | undefined;
  category: { id: string; name: string };
  userId: string;
};

export default function QuizForm({ questions, category, userId }: Props) {
  const [answer, setAnswer] = useState('');
  const [questionCount, setQuestionCount] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [progress, setProgress] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [savedResult, setSavedResult] = useState(false);

  if (!questions || questions.length === 0) {
    return <LoadingQuiz text="Loading questions..." />;
  }

  useEffect(() => {
    if (questions && questions.length > 0) {
      setCurrentQuestion(questions[0]);
    }
  }, [questions]);

  useEffect(() => {
    // Update progress when questionCount changes
    setProgress(((questionCount + 1) / questions.length) * 100);
  }, [questionCount, questions.length]);

  const handleFormAnswer = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let correctCount = correctAnswers;

    const formData = new FormData(event.currentTarget);

    const submission = parseWithZod(formData, { schema: answersSchema });

    if (submission.status !== 'success') {
      return submission.reply();
    }

    // Check if the answer is correct
    if (answer === currentQuestion?.options[currentQuestion.correctAnswer]) {
      correctCount += 1;
      setCorrectAnswers(correctCount);
    } else {
    }

    if (questionCount + 1 === questions.length) {
      setIsQuizComplete(true);
      return;
    }

    // Move to the next question
    if (questionCount < questions.length - 1) {
      setQuestionCount((prev) => prev + 1);
      setAnswer(''); // Reset answer for the next question
      setCurrentQuestion(questions[questionCount + 1]);
    }
  };

  const [form, fields] = useForm({
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: answersSchema });
    },
    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput',
  });

  const answers = currentQuestion?.options.map((option) => ({
    value: option,
    label: option,
  }));

  // save data to database
  useEffect(() => {
    if (isQuizComplete && !savedResult) {
      let totalPoints: number =
        questions[0].difficulty === 'EASY'
          ? correctAnswers * 1
          : questions[0].difficulty === 'MEDIUM'
          ? correctAnswers * 2
          : questions[0].difficulty === 'HARD'
          ? correctAnswers * 3
          : 0;

      const result: Result = {
        userId,
        numberOfQuestions: questions.length,
        correctlyAnswered: correctAnswers,
        categoryId: category.id,
        difficulty: questions[0].difficulty,
        points: totalPoints,
      };

      saveResult(result);
      setSavedResult(true);
    }
  }, [
    isQuizComplete,
    savedResult,
    saveResult,
    userId,
    questions,
    correctAnswers,
    category.id,
  ]);

  if (isQuizComplete) {
    return (
      <div className="text-center">
        <div className="absolute top-2 left-2 p-4 bg-transparent"></div>

        <ResultCard
          correctAnswers={correctAnswers}
          totalQuestions={questions.length}
          category={category}
          difficulty={questions[0].difficulty}
          userId={userId}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-evenly  min-h-screen p-4  text-white relative">
      {/* Progress Bar */}
      <div className="w-11/12 ml-2 bg-gray-700 rounded-full h-4 overflow-hidden absolute top-3.5">
        <div
          className="bg-fuchsia-500 h-full transition-all duration-500"
          style={{ width: `${progress}%` }} // Dynamically update width based on progress
        ></div>
      </div>

      <div className="flex items-center gap-1 sm:gap-3">
        <Image
          src="/quiz_up_logo.png"
          alt="logo"
          width={80}
          height={80}
          className="sm:size-32 md:size-48"
        />
        <div className="text-4xl sm:text-7xl md:text-8xl jersey_10_8cf6801b-module__g70_MG__className text-white">
          Quiz Up
        </div>
      </div>

      {/* Question Container */}
      <div className=" flex flex-col items-center justify-between w-full min-h-1/3 max-w-4xl bg-fuchsia-950 bg-opacity-90 rounded-lg shadow-md p-6 text-center">
        <div className="flex items-center gap-1">
          <Hash />
          <p className="text-lg capitalize font-semibold tracking-wider">
            {category.name}
          </p>
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold my-4">
          {currentQuestion?.question}
        </h2>
        <p className="text-sm font-medium">
          Difficulty: {currentQuestion?.difficulty}
        </p>
      </div>

      <form
        className="w-full flex flex-col space-y-6"
        onSubmit={handleFormAnswer}
        id={form.id}
        name={form.name}
      >
        {/* Answer Options */}
        <RadioGroup
          value={answer}
          onValueChange={setAnswer}
          className="flex flex-col sm:mx-auto sm:grid sm:grid-cols-2 gap-4 w-full max-w-3xl"
          name={fields.answer.name}
          key={fields.answer.key}
        >
          {answers?.map((option) => (
            <div key={option.value}>
              <RadioGroupItem
                value={option.value}
                id={option.value}
                className="hidden"
              />
              <Label
                htmlFor={option.value}
                className={`block w-full p-4 sm:p-5 md:p-6 text-center rounded-lg cursor-pointer border-2 font-semibold transition-all duration-500 ${
                  answer === option.value
                    ? 'bg-primary border-fuchsia-300 shadow-lg'
                    : 'bg-slate-800 hover:shadow-md hover:text-slate-400 border-slate-700'
                }`}
              >
                {option.label}
              </Label>
            </div>
          ))}
        </RadioGroup>

        {/* Next Button */}
        <div>
          {questionCount + 1 === questions.length ? (
            <SubmitButton
              text="FINISH THE QUIZ"
              customClassName="mt-2 px-8 py-5 rounded-lg font-bold uppercase shadow-md hover:scale-105 hover:shadow-xl transition-all"
            />
          ) : (
            <SubmitButton
              text="NEXT"
              customClassName="mt-2 px-8 py-5 rounded-lg font-bold uppercase shadow-md hover:scale-105 hover:shadow-xl transition-all"
            />
          )}
        </div>
      </form>
    </div>
  );
}
