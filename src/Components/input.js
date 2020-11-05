import React from 'react';

const Input = ({ id, type, inputLabel }) => {
  return (
    <div className='input-wrapper'>
      <input type={type} className='input' id={id} />
      <label htmlFor={id}>{inputLabel}</label>
    </div>
  );
};

export default Input;
