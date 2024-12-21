'use client';

import React, { useActionState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { CirclePlay, OctagonAlert } from 'lucide-react';
import { Category } from '@/types/types';
import { useForm } from '@conform-to/react';
import { lobbySchema } from '@/lib/zodSchemas';
import { parseWithZod } from '@conform-to/zod';
import { storeQuizSettings } from '@/lib/actions/game/actions';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';

type Props = {
  categories: Category[];
};

export default function LobbyForm({ categories }: Props) {
  const [numOfQuestions, setNumOfQuestions] = React.useState('5');
  const [difficulty, setDifficulty] = React.useState('EASY');
  const [lastResult, action] = useActionState(storeQuizSettings, undefined);
  const [form, fields] = useForm({
    lastResult,

    onValidate({ formData }) {
      return parseWithZod(formData, {
        schema: lobbySchema,
      });
    },

    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput',
  });

  const questionsOption = [
    { value: '5', label: '5 Questions' },
    { value: '10', label: '10 Questions' },
  ];
  const difficultyOption = [
    { value: 'EASY', label: 'Easy' },
    { value: 'MEDIUM', label: 'Medium' },
    { value: 'HARD', label: 'Hard' },
  ];
  return (
    <form
      className="flex flex-col gap-8"
      name={form.name}
      onSubmit={form.onSubmit}
      action={action}
      id={form.id}
    >
      <div className="flex flex-col items-center gap-4">
        <div className=" flex flex-col w-full gap-2">
          {fields.category.errors ? (
            <div className="flex items-center justify-center font-semibold text-rose-500 gap-1">
              <OctagonAlert className="size-5" />
              <p className="text-rose-500">Please choose a category</p>
              {/* <p>{fields.category.errors}</p> */}
            </div>
          ) : (
            <p className="text-white font-semibold text-center">
              Choose quiz category
            </p>
          )}
          <Select
            name={fields.category.name}
            key={fields.category.key}
            defaultValue={fields.category.initialValue}
          >
            <SelectTrigger className=" border-2 h-11 rounded-lg font-semibold text-fuchsia-200">
              <SelectValue className="p-3" placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.id} value={category.id}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col text-center gap-2">
          {fields.numberOfQuestions.errors ? (
            <div className="flex items-center justify-center font-semibold text-rose-500 gap-1">
              <OctagonAlert className="size-5" />
              <p className="text-rose-500">
                Please choose a number of questions
              </p>
              {/* <p>{fields.numberOfQuestions.errors}</p> */}
            </div>
          ) : (
            <p className="text-white font-semibold text-center">
              Choose number of questions
            </p>
          )}
          <RadioGroup
            value={numOfQuestions}
            name={fields.numberOfQuestions.name}
            key={fields.numberOfQuestions.key}
            defaultValue={fields.numberOfQuestions.initialValue}
            onValueChange={setNumOfQuestions}
            className="flex flex-col gap-4 w-full  md:grid md:grid-cols-2"
          >
            {questionsOption.map((option) => (
              <div key={option.value} className="flex items-center w-full">
                <RadioGroupItem
                  value={option.value}
                  id={option.value}
                  className="sr-only w-full"
                />
                <Label
                  htmlFor={option.value}
                  className="w-full cursor-pointer "
                >
                  <span
                    className={`flex uppercase font-bold  p-3 md:px-16 justify-center items-center hover:scale-105 text-fuchsia-200 border-2 rounded-lg ${
                      numOfQuestions === option.value
                        ? 'border-fuchsia-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#ff00dd,0_0_15px_#ff00dd,0_0_30px_#ff00dd] animate-pulse duration-1000'
                        : ''
                    }`}
                  >
                    {option.label}
                  </span>
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className="flex flex-col text-center gap-2">
          {fields.difficulty.errors ? (
            <div className="flex items-center justify-center font-semibold text-rose-500 gap-1">
              <OctagonAlert className="size-5" />
              <p className="text-rose-500">Please choose a difficulty</p>
              {/* <p>{fields.numberOfQuestions.errors}</p> */}
            </div>
          ) : (
            <p className="text-white font-semibold text-center">
              Choose a difficulty
            </p>
          )}
          <RadioGroup
            value={difficulty}
            name={fields.difficulty.name}
            key={fields.difficulty.key}
            defaultValue={fields.difficulty.initialValue}
            onValueChange={setDifficulty}
            className="flex flex-col gap-4 w-full  md:grid md:grid-cols-3"
          >
            {difficultyOption.map((option) => (
              <div key={option.value} className="flex items-center w-full">
                <RadioGroupItem
                  value={option.value}
                  id={option.value}
                  className="sr-only w-full"
                />
                <Label
                  htmlFor={option.value}
                  className="w-full cursor-pointer "
                >
                  <span
                    className={`flex uppercase font-bold  p-3 md:px-16 justify-center items-center hover:scale-105 text-fuchsia-200 border-2 rounded-lg ${
                      difficulty === option.value
                        ? 'border-fuchsia-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#ff00dd,0_0_15px_#ff00dd,0_0_30px_#ff00dd] animate-pulse duration-1000'
                        : ''
                    }`}
                  >
                    {option.label}
                  </span>
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center ">
        <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-primary bg-primary px-6 font-medium text-white transition-all [box-shadow:0px_4px_1px_#3d3796] active:translate-y-[2px] active:shadow-none">
          <CirclePlay className="mr-2" /> Start the Quiz
        </button>
      </div>
    </form>
  );
}
