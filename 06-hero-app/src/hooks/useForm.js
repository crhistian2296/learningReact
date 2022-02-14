import { useState } from 'react';

const useForm = (initialState = {}) => {
  const [formValues, setFormValues] = useState(initialState);

  const reset = () => {
    setFormValues(initialState);
  };

  const handleInputChange = ({ target }) => {
    setFormValues(() => ({
      ...formValues,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return [formValues, handleInputChange, reset, handleSubmit];
};

export default useForm;
