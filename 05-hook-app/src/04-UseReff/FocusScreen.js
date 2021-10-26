import React, { useRef } from "react";

const FocusScreen = () => {
  const inputRef = useRef();
  console.log(inputRef);
  return (
    <div className="m-5">
      <h1>Focus Screen</h1>
      <hr />
      <input className="form-control" type="text" placeholder="hola" id="ifirst" ref={inputRef} />
      <button className="btn btn-outline-primary mt-3">Select</button>
    </div>
  );
};

export default FocusScreen;
