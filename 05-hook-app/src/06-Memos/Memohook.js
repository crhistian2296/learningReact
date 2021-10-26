import React, { useMemo, useState } from "react";
import procesoPesado from "../helper/procesoPesado";
import useCounter from "../hooks/useCounter";

const Memohook = () => {
  const { counter, increment } = useCounter(5000);
  const [show, setShow] = useState(true);
  const memoEnAccion = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <div className="m-5">
      <h1>useMemo()</h1>
      <hr />
      <h2>
        Counter: <small>{counter}</small>
      </h2>

      <p>Mira la consola{memoEnAccion}</p>

      <button className="btn btn-primary" onClick={() => increment()}>
        + 1
      </button>
      <button className="btn btn-outline-primary" onClick={() => setShow(!show)}>
        show/hidden {JSON.stringify(show)}
      </button>
    </div>
  );
};

export default Memohook;
