import { useState, useEffect } from 'react';
import ShowAnswer from './showAnswer.js';


function Flipcard() {
    const [questions, setQuestion] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [numOfCorrectQuestions, setNumOfCorrectQuestions] = useState(0);

    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=boolean")
            .then(response => response.json())
            .then(data => setQuestion(data.results))
    }, []);

    const nextQuestion = (e) => {
        if (correct_answer === e.target.value) {
            setNumOfCorrectQuestions(numOfCorrectQuestions + 1);
        }
        console.log(numOfCorrectQuestions);
        setCurrentQuestionIndex(prevIndex => (prevIndex < 9) ? (prevIndex + 1) : setQuestion([]));
    };

    const { question, correct_answer } = questions[currentQuestionIndex] || {};

    return (
        <>
            <div className="App">
                {questions.length > 0 ? (
                    <div className="card-container">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <h3>Question {currentQuestionIndex + 1}</h3>
                                <p dangerouslySetInnerHTML={{ __html: question }} />
                                <button value="True" onClick={nextQuestion}>True</button>
                                <button value="False" onClick={nextQuestion}>False</button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <ShowAnswer correctTotal={numOfCorrectQuestions} />
                )}
            </div>
        </>
    );
}

export default Flipcard;