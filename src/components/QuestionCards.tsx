import React from 'react';

type Props = {
    question: string;
    answer: string[];
    callback: any;
    useAnswer: string; 
    questionNr: number;
    totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({ 
    question, 
    answer, 
    callback, 
    useAnswer, 
    questionNr, 
    totalQuestions 
}) => (
<div>
    <p className='number'>
        Question: {questionNr} / {totalQuestions}
    </p>
        <p dangerouslySetInnerHTML={{__html: question }} />
    <div>
        
    </div>
</div>
);

export default QuestionCard;