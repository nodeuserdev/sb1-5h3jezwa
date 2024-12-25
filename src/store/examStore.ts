import { create } from 'zustand';
import { Question } from '../types';

interface ExamState {
  currentQuestionIndex: number;
  userAnswers: Record<string, string[]>;
  isSubmitted: boolean;
  setCurrentQuestion: (index: number) => void;
  setUserAnswer: (questionId: string, answers: string[]) => void;
  submitExam: () => void;
  resetExam: () => void;
}

export const useExamStore = create<ExamState>((set) => ({
  currentQuestionIndex: 0,
  userAnswers: {},
  isSubmitted: false,
  setCurrentQuestion: (index) => set({ currentQuestionIndex: index }),
  setUserAnswer: (questionId, answers) =>
    set((state) => ({
      userAnswers: { ...state.userAnswers, [questionId]: answers },
    })),
  submitExam: () => set({ isSubmitted: true }),
  resetExam: () => set({ currentQuestionIndex: 0, userAnswers: {}, isSubmitted: false }),
}));