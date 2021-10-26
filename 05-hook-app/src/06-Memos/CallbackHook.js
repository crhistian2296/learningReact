import React, { useCallback, useState } from "react";
import IncreaseButton from "./IncreaseButton";

const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  //Es importante no usar counter dentro del callBack para no disparar la renderizacion
  //con cada cambio del mismo
  const increment = useCallback(
    (num) => {
      setCounter((iState) => iState + num);
    },
    [setCounter]
  );

  return (
    <div className="m-5">
      <h1>useCallbackHook()</h1>
      <hr />
      <h2>Counter: {counter}</h2>
      <IncreaseButton increment={increment} />
    </div>
  );
};

export default CallbackHook;
