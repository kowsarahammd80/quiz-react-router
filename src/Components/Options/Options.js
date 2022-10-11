import React from 'react';

const Options = ({option,id,}) => {
  // console.log(option)
  return (

      <div className="form-check form-check-inline">

      <input className="form-check-input" type="radio" id={option}  name={id} value={option}/>

      <label className="form-check-label" for={option} >

        {option}

      </label>

      </div>
     
  );
};

export default Options;