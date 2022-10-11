import React from 'react';
import { useLoaderData } from 'react-router-dom';
import logo from '../../image/background.jpg'
import Quizs from '../Quizs/Quizs';



const Home = () => {
  let quizes = useLoaderData();
  return (
    <div className='container '>
      
      <div className="card text-bg-light  border-0">
         <img src={logo} className="card-img" alt="..."/>
        <div className="card-img-overlay">
         <h1 className="card-title mt-3  ">Welcome Web Online Quiz</h1>
         <p className="card-text fw-bold">Never giveup and keep  larning</p>
         <p className="card-text"><small></  small></p>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-2 g-4 m-3">
       {

          quizes.data.map(quiz => <Quizs quiz={quiz} key={quiz.id}></Quizs>)

       }
     
      </div>
    </div>
  );
};

export default Home;