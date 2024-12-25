import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ExamList } from './pages/ExamList';
import { ExamSession } from './pages/ExamSession';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <h1 className="text-2xl font-bold text-gray-900">Certification Practice Tests</h1>
          </div>
        </header>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<ExamList />} />
            <Route path="/exam/:examId" element={<ExamSession />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;