import React from 'react';
import './QnAComponent.css'

const QnAComponent = ({ questions, answers }) => {
    console.log("this is answer",answers);
  if (!questions || !answers || questions.length !== answers.length) {
    return <p>Error: Question and answer arrays must have equal length and exist.</p>;
  }

  return (
    <div className="qna-container">
      {questions.map((question, index) => (
        <div key={index} className="qna-item">
          <p className="question">{question}</p>
          <p className="answer">{answers[index]}</p>
        </div>
      ))}
    </div>
  );
};

export default QnAComponent;
