import React from 'react';

const Button = ({ type, className, children, clicked }) => {
  return (
    <button className={className} type={type} onClick={clicked}>
      {children}
    </button>
  );
};

export default Button;
