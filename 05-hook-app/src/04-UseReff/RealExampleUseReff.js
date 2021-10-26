import React, { useState } from "react";
import MultiplesCustomHooks from "../03-Examples/MultiplesCustomHooks";

const RealExampleUseReff = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="m-5">
      <h1>Cotidian use of useReff</h1>
      <hr />
      {show && <MultiplesCustomHooks />}
      <button
        className="btn btn-primary ml-5"
        onClick={() => {
          setShow(() => !show);
        }}
      >
        show/hide
      </button>
    </div>
  );
};

export default RealExampleUseReff;
