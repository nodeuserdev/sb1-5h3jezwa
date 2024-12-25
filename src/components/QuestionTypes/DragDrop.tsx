import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Question } from '../../types';

interface Props {
  question: Question;
  selectedAnswers: string[];
  onAnswerSelect: (answers: string[]) => void;
  isDisabled?: boolean;
}

export function DragDrop({ question, selectedAnswers, onAnswerSelect, isDisabled }: Props) {
  const handleDragEnd = (result: any) => {
    if (!result.destination || isDisabled) return;

    const items = Array.from(selectedAnswers);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    onAnswerSelect(items);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="answers">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="space-y-2"
          >
            {question.answers.map((answer, index) => (
              <Draggable
                key={answer.id}
                draggableId={answer.id}
                index={index}
                isDragDisabled={isDisabled}
              >
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="p-4 bg-white border rounded-lg shadow-sm"
                  >
                    {answer.text}
                    {answer.imageUrl && (
                      <img
                        src={answer.imageUrl}
                        alt={answer.text}
                        className="mt-2 max-w-md rounded-lg"
                      />
                    )}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}