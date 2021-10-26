import React, { useState } from "react";
import useCounter from "../hooks/useCounter";
import Small from "./Small";

const Memorize = () => {
  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(true);

  return (
    <div className="m-5">
      <h1>memo()</h1>
      <hr />
      <h2>
        Counter: <Small counter={counter} />
      </h2>

      <button className="btn btn-primary" onClick={() => increment()}>
        + 1
      </button>
      <button className="btn btn-outline-primary" onClick={() => setShow(!show)}>
        show/hidden {JSON.stringify(show)}
      </button>
    </div>
  );
};

export default Memorize;
