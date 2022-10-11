import React from 'react';
import { Link } from 'react-router-dom';

const Quizs = ({quiz}) => {
  let {logo, id , name} = quiz
  return (
    
       <div class="col">
         <div class="card bg-light">
            <img src={logo} class="card-img-top" alt="..."/>
         <div class="card-body">
           <h5 class="card-title">{name}</h5>
            <p class="card-text "><Link to={`/quiz/${id}`}> <button className ='bg-info p-2 border-0 fw-bold'>Start Quiz</button> </Link></p>
         </div>
       </div>
      </div>
  
  );
};

export default Quizs;