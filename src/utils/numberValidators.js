export const validateIntegerField = (fieldValue) => {
    if (fieldValue === "" || fieldValue === null || fieldValue === undefined) {
      return "This field is required.";
    }
    if (isNaN(Number(fieldValue))) {
      return "Must be a number";
    }
    if (!Number.isInteger(Number(fieldValue))) {
      return "Must be an integer";
    }
    if (Number(fieldValue) < 0) {
      return "Must be positive";
    }
    return null; 
};
  
export const validateDecimalField = (fieldValue, isRequired = true) => {
  if ((fieldValue === "" || fieldValue === null || fieldValue === undefined) && isRequired) {
    return "This field is required.";
  }
  
  if ((fieldValue === "" || fieldValue === null || fieldValue === undefined) && !isRequired) {
    return null;
  }
    
  const decimalRegex = /^\d{1,10}(\.\d{1,2})?$/;
  const number = Number(fieldValue);
    
  if (isNaN(number)) {
    return "Must be a number";
  }
  if (number < 0) {
    return "Must be positive";
  }
  if (!decimalRegex.test(fieldValue)) {
    return "Must have up to 10 whole digits and 2 decimals";
  }
  return null; 
};