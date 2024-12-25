import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useExamStore } from '../store/examStore';
import { ExamProgress } from '../components/ExamProgress';
import { MultipleChoice } from '../components/QuestionTypes/MultipleChoice';
import { DragDrop } from '../components/QuestionTypes/DragDrop';
import { PaywallModal } from '../components/PaywallModal';
import { Question } from '../types';

// Mock data - replace with actual API call
const mockExam = {
  id: 'az-900',
  title: 'Microsoft Azure Fundamentals (AZ-900)',
  description: 'Practice test for Azure Fundamentals certification',
  totalQuestions: 100,
  freeQuestions: 10,
  price: 29.99,
  questions: [
    {
      id: 'q1',
      type: 'multiple-choice',
      text: 'Which Azure service is used for storing non-relational data?',
      answers: [
        { id: 'a1', text: 'Azure Cosmos DB' },
        { id: 'a2', text: 'Azure SQL Database' },
        { id: 'a3', text: 'Azure Table Storage' },
        { id: 'a4', text: 'Azure Database for PostgreSQL' },
      ],
      correctAnswers: ['a1'],
      explanation: 'Azure Cosmos DB is Microsoft\'s globally distributed, multi-model database service for managing non-relational data.',
    },
    // Add more questions
  ],
};

export function ExamSession() {
  const { examId } = useParams();
  const [showPaywall, setShowPaywall] = useState(false);
  const { currentQuestionIndex, userAnswers, setCurrentQuestion, setUserAnswer } = useExamStore();

  const currentQuestion = mockExam.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === mockExam.questions.length - 1;
  const needsPayment = currentQuestionIndex >= mockExam.freeQuestions;

  const handleAnswerSelect = (answers: string[]) => {
    setUserAnswer(currentQuestion.id, answers);
  };

  const handleNext = () => {
    if (needsPayment) {
      setShowPaywall(true);
      return;
    }
    setCurrentQuestion(currentQuestionIndex + 1);
  };

  const renderQuestion = (question: Question) => {
    const selectedAnswers = userAnswers[question.id] || [];

    switch (question.type) {
      case 'multiple-choice':
        return (
          <MultipleChoice
            question={question}
            selectedAnswers={selectedAnswers}
            onAnswerSelect={handleAnswerSelect}
          />
        );
      case 'drag-drop':
        return (
          <DragDrop
            question={question}
            selectedAnswers={selectedAnswers}
            onAnswerSelect={handleAnswerSelect}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <ExamProgress
        current={currentQuestionIndex}
        total={mockExam.questions.length}
        freeLimit={mockExam.freeQuestions}
      />

      <div className="bg-white p-6 rounded-lg shadow-md">
        {currentQuestion.imageUrl && (
          <img
            src={currentQuestion.imageUrl}
            alt="Question illustration"
            className="mb-4 rounded-lg max-w-full"
          />
        )}
        
        <h2 className="text-xl font-semibold mb-4">{currentQuestion.text}</h2>
        
        {renderQuestion(currentQuestion)}

        <div className="mt-6 flex justify-between">
          <button
            onClick={() => setCurrentQuestion(currentQuestionIndex - 1)}
            disabled={currentQuestionIndex === 0}
            className="px-4 py-2 text-gray-600 disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            {isLastQuestion ? 'Finish' : 'Next'}
          </button>
        </div>
      </div>

      <PaywallModal
        isOpen={showPaywall}
        onClose={() => setShowPaywall(false)}
        price={mockExam.price}
      />
    </div>
  );
}