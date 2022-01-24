import React, { useState } from 'react';

 function QuizView() {
    function shuffle(array) {
		let currentIndex = array.length,  randomIndex;
		
		// While there remain elements to shuffle...
		while (currentIndex != 0) {
		
			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;
		
			// And swap it with the current element.
			[array[currentIndex], array[randomIndex]] = [
			array[randomIndex], array[currentIndex]];
		}
		
		return array;
    }

	var questions = [
		{
			questionText: 'name of animal?',
            image:"assit/img/2.jpg",
			answerOptions: [
				{ answerText: 'rabit', isCorrect: true },
				{ answerText: 'sheep', isCorrect: false },
				{ answerText: 'elephant', isCorrect:false  },
				{ answerText: 'monky', isCorrect: false },
			],
		},
		{
			questionText: 'name of animal?',
			image:"assit/img/buffalo.jpg",
			answerOptions: [
				{ answerText: 'elephant', isCorrect: false },
				{ answerText: 'buffalo', isCorrect: true },
				{ answerText: 'monky', isCorrect: false },
				{ answerText: 'rabit', isCorrect: false },
			],
		},
		{
			questionText: 'name of animal?',
			image:"assit/img/cat.jpg",
			answerOptions: [
				{ answerText: 'cat', isCorrect: true },
				{ answerText: 'monky', isCorrect: false },
				{ answerText: 'buffalo', isCorrect: false },
				{ answerText: 'sheep', isCorrect: false },
			],
		},
		{
			questionText: 'name of animal?',
			image:"assit/img/cow.jpg",
			answerOptions: [
				{ answerText: 'cow', isCorrect: true },
				{ answerText: 'monky', isCorrect: false },
				{ answerText: 'buffalo', isCorrect: false },
				{ answerText: 'sheep', isCorrect: false },
			],
		},
		{
			questionText: 'name of animal?',
            image:"assit/img/deer.jpg",
			answerOptions: [
				{ answerText: 'deer', isCorrect: true },
				{ answerText: 'sheep', isCorrect: false },
				{ answerText: 'elephant', isCorrect:false  },
				{ answerText: 'monky', isCorrect: false },
			],
		},
		{
			questionText: 'name of animal?',
			image:"assit/img/dog.jpg",
			answerOptions: [
				{ answerText: 'elephant', isCorrect: false },
				{ answerText: 'dog', isCorrect: true },
				{ answerText: 'monky', isCorrect: false },
				{ answerText: 'rabit', isCorrect: false },
			],
		},
		{
			questionText: 'name of animal?',
			image:"assit/img/elephant.jpg",
			answerOptions: [
				{ answerText: 'elephant', isCorrect: true },
				{ answerText: 'monky', isCorrect: false },
				{ answerText: 'buffalo', isCorrect: false },
				{ answerText: 'sheep', isCorrect: false },
			],
		},
		{
			questionText: 'name of animal?',
			image:"assit/img/fox.jpg",
			answerOptions: [
				{ answerText: 'fox', isCorrect: true },
				{ answerText: 'monky', isCorrect: false },
				{ answerText: 'buffalo', isCorrect: false },
				{ answerText: 'sheep', isCorrect: false },
			],
		},
		{
			questionText: 'name of animal?',
            image:"assit/img/giraffe.jpg",
			answerOptions: [
				{ answerText: 'giraffe', isCorrect: true },
				{ answerText: 'sheep', isCorrect: false },
				{ answerText: 'elephant', isCorrect:false  },
				{ answerText: 'monky', isCorrect: false },
			],
		},
		{
			questionText: 'name of animal?',
			image:"assit/img/goat.jpg",
			answerOptions: [
				{ answerText: 'elephant', isCorrect: false },
				{ answerText: 'goat', isCorrect: true },
				{ answerText: 'monky', isCorrect: false },
				{ answerText: 'rabit', isCorrect: false },
			],
		},
		{
			questionText: 'name of animal?',
			image:"assit/img/hippo.jpg",
			answerOptions: [
				{ answerText: 'hippo', isCorrect: true },
				{ answerText: 'monky', isCorrect: false },
				{ answerText: 'buffalo', isCorrect: false },
				{ answerText: 'sheep', isCorrect: false },
			],
		},
		{
			questionText: 'name of animal?',
			image:"assit/img/Kangaroo-in-Hindi.jpg",
			answerOptions: [
				{ answerText: 'kangaroo', isCorrect: true },
				{ answerText: 'monky', isCorrect: false },
				{ answerText: 'buffalo', isCorrect: false },
				{ answerText: 'sheep', isCorrect: false },
			],
		},
		{
			questionText: 'name of animal?',
            image:"assit/img/leapods.jpg",
			answerOptions: [
				{ answerText: 'leapods', isCorrect: true },
				{ answerText: 'sheep', isCorrect: false },
				{ answerText: 'elephant', isCorrect:false  },
				{ answerText: 'monky', isCorrect: false },
			],
		},
		{
			questionText: 'name of animal?',
			image:"assit/img/lion.jpg",
			answerOptions: [
				{ answerText: 'elephant', isCorrect: false },
				{ answerText: 'lion', isCorrect: true },
				{ answerText: 'monky', isCorrect: false },
				{ answerText: 'rabit', isCorrect: false },
			],
		},
		{
			questionText: 'name of animal?',
			image:"assit/img/monkey.jpg",
			answerOptions: [
				{ answerText: 'monkey', isCorrect: true },
				{ answerText: 'dog', isCorrect: false },
				{ answerText: 'buffalo', isCorrect: false },
				{ answerText: 'sheep', isCorrect: false },
			],
		},
		{
			questionText: 'name of animal?',
			image:"assit/img/rino.jpg",
			answerOptions: [
				{ answerText: 'rino', isCorrect: true },
				{ answerText: 'monky', isCorrect: false },
				{ answerText: 'buffalo', isCorrect: false },
				{ answerText: 'sheep', isCorrect: false },
			],
		},
		{
			questionText: 'name of animal?',
            image:"assit/img/sheep.jpg",
			answerOptions: [
				{ answerText: 'sheep', isCorrect: true },
				{ answerText: 'dog', isCorrect: false },
				{ answerText: 'elephant', isCorrect:false  },
				{ answerText: 'monky', isCorrect: false },
			],
		},
		{
			questionText: 'name of animal?',
			image:"assit/img/tiger.jpg",
			answerOptions: [
				{ answerText: 'elephant', isCorrect: false },
				{ answerText: 'tiger', isCorrect: true },
				{ answerText: 'monky', isCorrect: false },
				{ answerText: 'rabit', isCorrect: false },
			],
		},
		{
			questionText: 'name of animal?',
			image:"assit/img/wolf.jpg",
			answerOptions: [
				{ answerText: 'wolf', isCorrect: true },
				{ answerText: 'monky', isCorrect: false },
				{ answerText: 'buffalo', isCorrect: false },
				{ answerText: 'sheep', isCorrect: false },
			],
		},
		{
			questionText: 'name of animal?',
			image:"assit/img/zebra.jpg",
			answerOptions: [
				{ answerText: 'zebra', isCorrect: true },
				{ answerText: 'monky', isCorrect: false },
				{ answerText: 'buffalo', isCorrect: false },
				{ answerText: 'sheep', isCorrect: false },
			],
		},
	];

	questions = shuffle(questions);
	console.log(questions);

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
            <span>your answer is wrong</span>
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
                           
						</div>
						<div className='question-text'>
							{questions[currentQuestion].questionText}
							<img src={questions[currentQuestion].image} className="questionImg" />
						</div>

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

export default QuizView;

// import React from 'react'
// import MainView from './MainView';
// import QuisApi from './QuisApi';

// const QuizView = () => {
//     const [QuizData, setstate] = useState(QuisApi);

//     return (
//         <>
//             <MainView QuizData ={QuizData}/>
//         </>
//     )
// }

// export default QuizView;