import React from 'react';
//import '../assets/styles/global.css'; 

const Label = ({ htmlFor, className ='custom-label', title, children }) => {
  return (
    <label htmlFor={htmlFor} className={className} title={title}>
      {children}
    </label>
  );
};

export default Label;