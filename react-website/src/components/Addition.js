import React, { useState } from 'react'; 
import '../App.css';
import './Addition.css';


export default function Addition() {
	const questions = [
		{
			questionText: '1 + 1 = ?',
			answerOptions: [
				{ answerText: '0', isCorrect: false },
				{ answerText: '11', isCorrect: false },
				{ answerText: '2', isCorrect: true },
				{ answerText: '1', isCorrect: false },
			],
		},
		{
			questionText: '2 + 3 = ?',
			answerOptions: [
				{ answerText: '2', isCorrect: false },
				{ answerText: '5', isCorrect: true },
				{ answerText: '3', isCorrect: false },
				{ answerText: '6', isCorrect: false },
			],
		},
		{
			questionText: '5 + 5 = ?',
			answerOptions: [
				{ answerText: '10', isCorrect: true },
				{ answerText: '15', isCorrect: false },
				{ answerText: '5', isCorrect: false },
				{ answerText: '9', isCorrect: false },
			],
		},
		{
			questionText: '4 + 0 ? ',
			answerOptions: [
				{ answerText: '0', isCorrect: false },
				{ answerText: '5', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '4', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='game_window'>
			{showScore ? (
				<div className='score-section'>
					Your Score: {score} / {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>.         
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
 