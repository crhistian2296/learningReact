import React from "react";
// import "./Counter.css";
import useCounter from "./hooks/useCounter";

const CounterApp = () => {
  const { state, increment, decrement, reset } = useCounter(400);

  return (
    <div className="m-5">
      <h2>Counter with hook = {state}</h2>
      <hr />
      <button className="btn btn-primary m-1" onClick={() => increment()}>
        +1
      </button>
      <button className="btn btn-primary m-1" onClick={() => decrement(2)}>
        -2
      </button>
      <button className="btn btn-info text-light m-1" onClick={() => reset()}>
        reset
      </button>
    </div>
  );
};

export default CounterApp;
