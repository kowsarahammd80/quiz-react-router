import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizList from '../QuizList/QuizList';



const QuizQussion = () => {
  let qussions = useLoaderData(); 
  let quss = qussions.data.questions
  console.log(quss)
  
  return (
  <div className='container mt-5 mb-3'>
      <div className="row row-cols-1 row-cols-md-2 g-4">
       {
       
       quss.map(qus => <QuizList qus={qus} key={qus.id}></QuizList>)
        
       }
       
    </div>
  </div>
  );
};

export default QuizQussion;