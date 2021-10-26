import React, { memo } from "react";

const IncreaseButton = memo(({ increment }) => {
  console.log("IncreaseButton render");
  return (
    <div>
      <button className="btn btn-primary" onClick={() => increment(3)}>
        Increase (+1)
      </button>
    </div>
  );
});

export default IncreaseButton;
