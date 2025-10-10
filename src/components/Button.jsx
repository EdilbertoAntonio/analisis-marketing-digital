import React from 'react';
//import '../assets/styles/global.css';

const Button = ({ type, onClick, className = 'button', children  }) => {
  return (
    <button 
        type={type}
        onClick={onClick}
        className={className}>
      {children}
    </button>
  );
};

export default Button;