import React from 'react';
import * as RadioGroup from '@radix-ui/react-radio-group';
import { Question } from '../../types';

interface Props {
  question: Question;
  selectedAnswers: string[];
  onAnswerSelect: (answers: string[]) => void;
  isDisabled?: boolean;
}

export function MultipleChoice({ question, selectedAnswers, onAnswerSelect, isDisabled }: Props) {
  return (
    <RadioGroup.Root
      className="flex flex-col gap-4"
      value={selectedAnswers[0]}
      onValueChange={(value) => onAnswerSelect([value])}
      disabled={isDisabled}
    >
      {question.answers.map((answer) => (
        <div key={answer.id} className="flex items-start space-x-3">
          <RadioGroup.Item
            id={answer.id}
            value={answer.id}
            className="w-6 h-6 rounded-full border border-gray-300 data-[state=checked]:bg-blue-600"
          />
          <label htmlFor={answer.id} className="text-gray-700">
            {answer.text}
            {answer.imageUrl && (
              <img
                src={answer.imageUrl}
                alt={answer.text}
                className="mt-2 max-w-md rounded-lg"
              />
            )}
          </label>
        </div>
      ))}
    </RadioGroup.Root>
  );
}