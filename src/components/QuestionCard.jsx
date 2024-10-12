import React from 'react';

const QuestionCard = ({ question, onAnswer }) => {
  const { question: questionText, correct_answer, incorrect_answers } = question;
  const options = [...incorrect_answers, correct_answer].sort(() => Math.random() - 0.5);

  return (
    <div className="p-4 border rounded shadow">
      <h3 className="text-lg font-bold color:white">{questionText}</h3>
      <div className="mt-4">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(option === correct_answer)}
            className="block w-full mt-2 bg-gray-200 p-2 rounded"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
