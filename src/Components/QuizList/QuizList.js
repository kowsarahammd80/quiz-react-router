import React from 'react';
import Options from '../Options/Options';

const QuizList = ({qus}) => {
  let {question, options,id} = qus
  console.log(options.id)
  return (
    <div className="col">
    <div className="card">
      <div className="card-body">
        

        <h5 className="card-title">{question}</h5>
        
        {
          options.map(option => <Options option={option} id={id}></Options>)
        }

    </div>
   </div>
  </div>
  );
};

export default QuizList;