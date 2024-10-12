import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [difficulty, setDifficulty] = useState('easy');
  const [questionCount, setQuestionCount] = useState(10);
  const navigate = useNavigate();

  // Fetch categories from the API
  useEffect(() => {
    fetch('https://opentdb.com/api_category.php')
      .then((response) => response.json())
      .then((data) => setCategories(data.trivia_categories))
      .catch((error) => console.error('Error fetching categories:', error));
  }, []);

  const startQuiz = () => {
    navigate('/quiz', { state: { selectedCategory, difficulty, questionCount } });
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <h1 >Welcome to Ike's Quiz App</h1>
      <h2> Test your knowledge with fun quizzes.</h2>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">Select a Category</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>

      <select
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>

      <input
        type="number"
        value={questionCount}
        onChange={(e) => setQuestionCount(e.target.value)}
        className="border p-2 rounded"
        min="1"
        max="50"
      />

      <button onClick={startQuiz} className="bg-blue-500 text-white px-4 py-2 rounded">
        Start Quiz
      </button>
    </div>
  );
};

export default HomePage;
