import React from 'react';
import * as Progress from '@radix-ui/react-progress';

interface Props {
  current: number;
  total: number;
  freeLimit: number;
}

export function ExamProgress({ current, total, freeLimit }: Props) {
  const progress = (current / total) * 100;

  return (
    <div className="w-full space-y-2">
      <div className="flex justify-between text-sm text-gray-600">
        <span>Question {current + 1} of {total}</span>
        <span>{freeLimit - current} free questions remaining</span>
      </div>
      <Progress.Root className="h-2 overflow-hidden rounded-full bg-gray-200">
        <Progress.Indicator
          className="h-full bg-blue-600 transition-all"
          style={{ width: `${progress}%` }}
        />
      </Progress.Root>
    </div>
  );
}