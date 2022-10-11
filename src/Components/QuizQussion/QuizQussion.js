import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizQussion = () => {
  let qussions = useLoaderData();
  console.log(qussions)
  return (
    <div>
      <h2>Quiz Qussion</h2>
    </div>
  );
};

export default QuizQussion;