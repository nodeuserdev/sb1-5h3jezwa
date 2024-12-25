import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, Clock } from 'lucide-react';

const exams = [
  {
    id: 'az-900',
    title: 'Microsoft Azure Fundamentals (AZ-900)',
    description: 'Practice for the AZ-900 certification exam with our comprehensive question bank.',
    totalQuestions: 100,
    freeQuestions: 10,
    price: 29.99,
    stats: {
      users: '10k+',
      passRate: '95%',
      avgTime: '2h',
    },
  },
  // Add more exams here
];

export function ExamList() {
  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Practice Tests for IT Certifications
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Prepare for your certification exam with our comprehensive practice tests.
          Start with free questions and unlock full access when you're ready.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {exams.map((exam) => (
          <div
            key={exam.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">{exam.title}</h3>
              <p className="mt-2 text-gray-600">{exam.description}</p>
              
              <div className="mt-4 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <Users className="w-5 h-5 mx-auto text-blue-600" />
                  <div className="mt-1 text-sm text-gray-600">{exam.stats.users} Users</div>
                </div>
                <div className="text-center">
                  <Award className="w-5 h-5 mx-auto text-blue-600" />
                  <div className="mt-1 text-sm text-gray-600">{exam.stats.passRate} Pass Rate</div>
                </div>
                <div className="text-center">
                  <Clock className="w-5 h-5 mx-auto text-blue-600" />
                  <div className="mt-1 text-sm text-gray-600">{exam.stats.avgTime} Avg Time</div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-blue-600">${exam.price}</span>
                  <span className="ml-2 text-sm text-gray-600">
                    ({exam.freeQuestions} questions free)
                  </span>
                </div>
                <Link
                  to={`/exam/${exam.id}`}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Start Practice
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}