import React from 'react';

const Question = ({ question, onChange }) => {
    return (
        <div className="question">
            <input
                type="text"
                placeholder="Enter your question here"
                value={question.question}
                onChange={onChange}
                className="question-input"
            />
        </div>
    );
};

export default Question;
