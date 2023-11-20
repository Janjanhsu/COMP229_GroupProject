import { useState, useEffect } from 'react';


function Flipcard() {
    const [questions, setQuestion] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=boolean")
            .then(response => response.json())
            .then(data => setQuestion(data.results))
    }, []);

    var numOfCorrectQuestions = 0;
    const nextQuestion = (e) => {
        if(correct_answer == e.value){
            numOfCorrectQuestions ++;
        }
        setCurrentQuestionIndex(prevIndex => (prevIndex < 9)? prevIndex + 1: prevIndex = 0);
    };

    const {question, correct_answer} = questions[currentQuestionIndex] || {};
    
    return (
        <>
            <div className="card-container">
                {questions.length > 0 ? (
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <h3>Question {currentQuestionIndex + 1}</h3>
                                <p>{question}</p>
                                <button value = "true" onClick={nextQuestion}>True</button> 
                                <button value = "false" onClick={nextQuestion}>False</button>                                 
                            </div>
                            <div className="flip-card-back">
                                <h3>Answer</h3>
                                <p>{correct_answer}</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </>
    );
}

export default Flipcard;