export type QuestionType = 'multiple-choice' | 'multiple-select' | 'yes-no' | 'drag-drop';

export interface Answer {
  id: string;
  text: string;
  imageUrl?: string;
}

export interface Question {
  id: string;
  type: QuestionType;
  text: string;
  imageUrl?: string;
  answers: Answer[];
  correctAnswers: string[];
  explanation: string;
}

export interface Exam {
  id: string;
  title: string;
  description: string;
  totalQuestions: number;
  freeQuestions: number;
  price: number;
  questions: Question[];
}