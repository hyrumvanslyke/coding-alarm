import React, { useState } from 'react';
import './codingQuestions.css'
function CodingQuestions() {
  const [answeredQuestions, setAnsweredQuestions] = useState(0);
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: 'What is the capital of France?',
      answer: 'Paris',
    },
    {
      id: 2,
      question: 'What is 2 + 2?',
      answer: '4',
    },
    {
      id: 3,
      question: 'What is the largest mammal on Earth?',
      answer: 'Blue whale',
    },
  ]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);

  const handleAnswerChange = (e) => {
    setUserAnswer(e.target.value);
  };

  const handleSubmitAnswer = () => {
    const currentQuestion = questions[currentQuestionIndex];

    if (userAnswer.toLowerCase() === currentQuestion.answer.toLowerCase()) {
      setIsCorrect(true);
      setAnsweredQuestions(answeredQuestions + 1);
    } else {
      setIsCorrect(false);
    }

    // Move to the next question if available
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setUserAnswer('');
    }
  };

  return (
    <div className="CodingQuestions">
      <h2>Coding Questions</h2>
      {currentQuestionIndex < questions.length ? (
        <div>
          <p>Question {currentQuestionIndex + 1}:</p>
          <p>{questions[currentQuestionIndex].question}</p>
          <input
            type="text"
            value={userAnswer}
            onChange={handleAnswerChange}
            placeholder="Your answer"
          />
          <button onClick={handleSubmitAnswer}>Submit</button>
          {isCorrect === true && <p>Correct!</p>}
          {isCorrect === false && <p>Incorrect. Try again.</p>}
        </div>
      ) : (
        <p>Congratulations! You've answered {answeredQuestions} questions correctly. The alarm is turned off.</p>
      )}
    </div>
  );
}

export default CodingQuestions;