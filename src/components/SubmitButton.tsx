'use client';

import { useFormStatus } from 'react-dom';
import { Button } from './ui/button';
import { Loader2 } from 'lucide-react';

type Props = {
  text: string;
  icon?: React.ReactNode;
  customClassName?: string;
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link';
};

export default function SubmitButton({
  text,
  icon,
  variant,
  customClassName,
}: Props) {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button
          variant={`${variant ? variant : 'default'}`}
          disabled
          className={`w-full ${customClassName}`}
        >
          <Loader2 className="animate-spin" /> Please wait...
        </Button>
      ) : (
        <Button
          variant={`${variant ? variant : 'default'}`}
          type="submit"
          className={`w-full ${customClassName}`}
        >
          {icon} {text}
        </Button>
      )}
    </>
  );
}
