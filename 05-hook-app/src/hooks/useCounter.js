import { useState } from "react";

const useCounter = (initialState = 10) => {
  const [counter, setCounter] = useState(initialState);

  const increment = () => {
    setCounter((state) => state + 1);
  };
  const decrement = () => {
    setCounter((state) => state - 1);
  };

  const reset = () => setCounter(initialState);

  return { counter, increment, decrement, reset };
};

export default useCounter;
