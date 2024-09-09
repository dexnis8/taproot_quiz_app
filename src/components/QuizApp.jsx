/* eslint-disable react/no-unescaped-entities */
// QuizApp.js
import { useState } from "react";
import Question from "./Question";
import CongratsPage from "./CongratsPage";
import MusicPlayer from "./MusicPlayer";

const questionsData = [
  {
    id: 1,
    text: "What is the official twitter username of the Taproot witches🧙‍♀️🧙‍♀️? ",
    answer: "@Taprootwitches",
    placeholder: "e.g @dexnis8",
  },
  {
    id: 2,
    text: "Who is the great founder of  the great taproot witches coven (username) 🧙‍♀️🧙‍♀️?",
    answer: "@Theresalieb",
    placeholder: "e.g @dexnis8",
  },
  {
    id: 3,
    text: "Where does the High Witch live ?",
    answer: "Austria",
    placeholder: "e.g located in",
  },
  {
    id: 4,
    text: " In how many hours did  ITS•A•FULL•MOON 🧙‍♀️mint out? ",
    answer: "3",
    placeholder: "e.g 0",
  },
  {
    id: 5,
    text: "What is supply of the Taproot witches collection🧙‍♀️?",
    answer: "3333",
    placeholder: "00000",
  },
  {
    id: 6,
    text: "How many honorary witches does the coven have 🧙‍♀️🧙‍♀️ ? ",
    answer: "4",
    placeholder: "e.g 0",
  },
  {
    id: 7,
    text: "@ordinooki + @lepuppettes + @TaprootWitches 🧙‍♀️🧙‍♀️  = ? ",
    answer: "❤️",
    placeholder: "e.g 😎",
  },
  // Add more questions as needed
];

const QuizApp = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [attemptsLeft, setAttemptsLeft] = useState(3);
  const [errorMessage, setErrorMessage] = useState("");
  const [showCongrats, setShowCongrats] = useState(false);
  const [quizOver, setQuizOver] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerCheck = (answer) => {
    const correctAnswer = questionsData[currentQuestionIndex].answer;
    if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
      setScore(score + 5); // Increment score by 5 for each correct answer
      if (currentQuestionIndex === questionsData.length - 1) {
        setShowCongrats(true);
      } else {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setAttemptsLeft(3);
        setErrorMessage("");
      }
    } else {
      setAttemptsLeft(attemptsLeft - 1);
      setErrorMessage("Incorrect answer. Please try again.");
      if (attemptsLeft === 1) {
        // No attempts left, end the quiz
        setQuizOver(true);
      }
    }
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setAttemptsLeft(3);
    setErrorMessage("");
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <style>
        {`
          @keyframes backgroundAnimation {
            from {
              background-position: 0 0;
            }
            to {
              background-position: 100% 0;
            }
          }
        `}
      </style>
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-top"
          style={{
            backgroundImage: `url('/background.jpeg')`,
            animation: "backgroundAnimation 60s linear infinite",
            WebkitAnimation: "backgroundAnimation 60s linear infinite",
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="container mx-auto relative z-10">
        <div className=" mt-10 w-[100px] mx-auto">
          <MusicPlayer />
        </div>
        <header className="text-center text-white py-8 pb-5">
          <h1 className="text-3xl font-bold">
            Prove yourself worthy of the Coven
          </h1>
        </header>
        {showCongrats ? (
          <CongratsPage />
        ) : quizOver ? (
          <div className="max-w-md mx-auto my-8 p-6 bg-red-100 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-red-800 mb-4">
              Quiz Over! You are not worthy?
            </h2>
          </div>
        ) : (
          <Question
            question={questionsData[currentQuestionIndex]}
            onAnswerCheck={handleAnswerCheck}
            onNextQuestion={handleNextQuestion}
            attemptsLeft={attemptsLeft}
            errorMessage={errorMessage}
            totalQuestions={questionsData.length}
            currentQuestion={currentQuestionIndex + 1}
            score={score}
          />
        )}
      </div>
    </div>
  );
};

export default QuizApp;
