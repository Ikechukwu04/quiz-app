import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import QuestionCard from '../components/QuestionCard';

const QuizPage = () => {
  const { state } = useLocation();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await fetch (
        `https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple`
      );
      const data = await response.json();
      setQuestions(data.results);
    };
console.log('data.results')
    fetchQuestions();
  }, [state]);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore((prev) => prev + 1);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      navigate('/score', { state: { score, questionCount: state.questionCount } });
    }
  };

  if (!questions || questions.length === 0) return <div>Loading...</div>;

  return (
    <div>
      <h2 className="text-xl font-bold">Quiz</h2>
      <QuestionCard
        question={questions[currentQuestionIndex]}
        onAnswer={handleAnswer}
      />
    </div>
  );
};

export default QuizPage;
