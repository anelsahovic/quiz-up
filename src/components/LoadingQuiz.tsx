import { LoaderCircle } from 'lucide-react';

type Props = {
  text: string;
};

export default function LoadingQuiz({ text }: Props) {
  return (
    <div className="w-screen h-screen flex items-center justify-center p-2 text-white gap-1 bg-gradient-to-b from-primary to-[#7116bb]">
      <LoaderCircle className="animate-spin" />
      {text}
    </div>
  );
}
