import React from 'react';
import '../assets/styles/input.css';

const Input = ({ type, placeholder, value, onChange, id, className='', error, readOnly = false, noMargin=false, ...props}) => {
  return (
    <div className={`input-container ${noMargin ? 'no-margin' : ''}`}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        id={id}
        className={`custom-input ${error ? 'error' : ''} ${className}`}
        readOnly={readOnly}
        {...props}
      />
    </div>
  );
};

export default Input;