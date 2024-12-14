import { LoaderCircle } from 'lucide-react';
import React from 'react';

export default function Loading() {
  return (
    <div className="w-full h-full flex items-center justify-center p-2 text-primary  gap-1">
      <LoaderCircle className="animate-spin" />
      Loading
    </div>
  );
}
