import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ScorePage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center space-y-4">
      <h1 className="text-2xl font-bold">Quiz Completed!</h1>
      <p className='text-red'>Your score: {state.score} / {state.questionCount}</p>
      <button
        onClick={() => navigate('/')}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Retake Quiz
      </button>
    </div>
  );
};

export default ScorePage;
