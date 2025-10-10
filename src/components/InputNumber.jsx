import React from 'react';
//import '../assets/styles/global.css';

const InputNumber = ({placeholder, value, onChange, id, min, step, onBlur, isDecimal = false, className='input' }) => {

  const handleChange = (e) => {
    let inputValue = e.target.value;

    if (inputValue === "") {
      onChange(e);
      return;
    }

    if (isDecimal) {
      if (inputValue === ".") {
        e.target.value = "0.";
        onChange(e);
        return;
      }

      if (inputValue.startsWith(".")) {
        e.target.value = `0${inputValue}`;
        onChange(e);
        return;
      }

      if (!/^\d*\.?\d*$/.test(inputValue)) {
      return;
      } 

      const [integerPart = "", decimalPart = ""] = inputValue.split('.');
      if (integerPart.length > 10) {
        return;
      }
      if (decimalPart.length > 2) {
        return;
      }
    } else {
      if (!/^\d+$/.test(inputValue)) {
        return;
      }
      //if (inputValue.length > 10) {
      //  return;
      //}
    }

  onChange(e);
};

const handleBlur = (e) => {
  if (isDecimal) {
    let normalizedValue = e.target.value;
    
    if (normalizedValue === "." || normalizedValue === "0.") {
      normalizedValue = "0.00";
    } else if (/^\d+\.$/.test(normalizedValue)) {
      normalizedValue = `${normalizedValue}00`;
    } else if (/^\d+\.\d$/.test(normalizedValue)) {
      normalizedValue = `${normalizedValue}0`;
    }
    
    if (normalizedValue !== e.target.value) {
      e.target.value = normalizedValue;
      onChange(e);
    }
  }
  
  if (onBlur) onBlur(e);
};

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        id={id}
        min={min}
        step={step}
        className={className}
      />
    </div>
  );
};

export default InputNumber;