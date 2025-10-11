import React from 'react';
import '../assets/styles/input.css';

const Input = ({ type, placeholder, value, onChange, id, className='', error, readOnly = false, ...props}) => {
  return (
    <div className="input-container">
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