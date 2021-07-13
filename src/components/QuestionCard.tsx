import React from 'react';
import { Wrapper, ButtonWrapper } from './QuestionCard.styles';
import {AnswerObject}from '../App'

type Props = {
    question: string,
    answers: string[],
    callBack: (e: React.MouseEvent<HTMLButtonElement>) => void,
    userAnswer: AnswerObject | undefined,
    questionNr: number,
    totalQuestions: number
}

const QuestionCard: React.FC<Props> = ({question, answers, callBack, userAnswer, questionNr, totalQuestions}) => {
     console.log(question)
    return (
        <Wrapper>
            <p className="number">Question: {questionNr} / {totalQuestions}</p>
            <p dangerouslySetInnerHTML={{__html: question}} />
            <div>
                {
                    answers.map((answer, index) => (
                        <ButtonWrapper 
                            key={index}
                            correct={userAnswer?.correctAnswer === answer}
                            userClicked={userAnswer?.answer === answer}
                        >
                            <button disabled={userAnswer ? true : false} value={answer} onClick={callBack}>
                                <span dangerouslySetInnerHTML={{ __html: answer}} />
                            </button>
                        </ButtonWrapper>
                    ))
                }
            </div>
        </Wrapper>
    );
};

export default QuestionCard;