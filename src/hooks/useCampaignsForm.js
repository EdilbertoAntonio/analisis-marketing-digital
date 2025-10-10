import { useState } from "react";
import { validateIntegerField, validateDecimalField } from '../utils/numberValidators';

export function useCampaignsForm(initialState) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { id, value } = event.target;
    setValues({
      ...values,
      [id]: value, 
    });
  };

  const validateMetricsForm = () => {
    const newErrors = {};

    if (!values.startDate) {
      newErrors.startDate = "This field is required.";
    }

    if (!values.endDate) {
      newErrors.endDate = "This field is required.";
    }

    if (!values.campaignName.trim()) {
      newErrors.campaignName = "This field is required.";
    }

    if (!values.platform) {
      newErrors.platform = "Please select a platform"; 
    }
    
    newErrors.reach = validateIntegerField(values.reach);
    newErrors.impressions = validateIntegerField(values.impressions);
    newErrors.clicks = validateIntegerField(values.clicks);
    newErrors.conversions = validateIntegerField(values.conversions);
    
    newErrors.amountSpent = validateDecimalField(values.amountSpent);
    newErrors.revenue = validateDecimalField(values.revenue,  false);

    const filteredErrors = Object.fromEntries(
      Object.entries(newErrors).filter(([_, value]) => value !== null)
    );

    setErrors(filteredErrors);
    return Object.keys(filteredErrors).length === 0; 
  };

  return {
    values,
    handleChange,
    validateMetricsForm,
    errors,
    setValues
  };
}