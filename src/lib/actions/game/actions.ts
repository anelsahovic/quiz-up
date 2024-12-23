import { lobbySchema } from '@/lib/zodSchemas';
import { parseWithZod } from '@conform-to/zod';
import { redirect } from 'next/navigation';

export const storeQuizSettings = (lastResult: unknown, formData: FormData) => {
  const submission = parseWithZod(formData, {
    schema: lobbySchema,
  });
  if (submission.status !== 'success') {
    return submission.reply();
  }

  // save to local storage

  // redirect to play
  return redirect(
    `/play?category=${submission.value.category}&questions=${submission.value.numberOfQuestions}&difficulty=${submission.value.difficulty}`
  );
};
