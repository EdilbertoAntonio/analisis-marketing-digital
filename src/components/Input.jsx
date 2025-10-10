import React from 'react';
//import '../assets/styles/global.css';

const Input = ({ type, placeholder, value, onChange, id, className='input'}) => {
  return (
    <div className="input-container">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        id={id}
        className={className}
      />
    </div>
  );
};

export default Input;