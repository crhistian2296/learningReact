import React, { useState } from "react";
import "./Counter.css";
const CounterApp = () => {
  const [data, setData] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
    counter4: 40,
  });

  const { counter1, counter2 } = data;

  return (
    <>
      <h2>Counter 1 = {counter1}</h2>
      <h2>Counter 2 = {counter2}</h2>
      <hr />
      <button
        className="btn btn-primary"
        onClick={() =>
          setData({
            ...data,
            counter1: counter1 + 1,
          })
        }
      >
        +1
      </button>
    </>
  );
};

export default CounterApp;
