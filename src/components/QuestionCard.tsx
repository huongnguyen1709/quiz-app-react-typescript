import React from 'react';

type Props = {
    question: string,
    answers: string[],
    answer: string,
    callBack: any,
    userAnswer: any,
    questionNr: number,
    totalQuestions: number
}

const QuestionCard: React.FC<Props> = ({question, answers, callBack, userAnswer, questionNr, totalQuestions, answer}) => {
    return (
        <div>
            <p className="number">Question: {questionNr} / {totalQuestions}</p>
            <p dangerouslySetInnerHTML={{__html: question}} />
            <div>
                {
                    answers.map(a => (
                        <div>
                            <button disabled={userAnswer} onClick={callBack}>
                                <span dangerouslySetInnerHTML={{ __html: answer}} />
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default QuestionCard;