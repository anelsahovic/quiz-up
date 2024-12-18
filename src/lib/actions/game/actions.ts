import { lobbySchema } from '@/lib/zodSchemas';
import { parseWithZod } from '@conform-to/zod';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/router';

export const storeQuizSettings = (lastResult: unknown, formData: FormData) => {
  const submission = parseWithZod(formData, {
    schema: lobbySchema,
  });
  if (submission.status !== 'success') {
    return submission.reply();
  }

  // redirect to play
  return redirect(
    `/play?category=${submission.value.category}&questions=${submission.value.numberOfQuestions}`
  );
};
