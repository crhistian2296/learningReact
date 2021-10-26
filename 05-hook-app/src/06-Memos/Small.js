import React, { memo } from "react";

//Memos es conveninete de aplicar solamente si se quiere ahorrar en numero de peticiones
//O la aplicacion renderiza una gran cantidad de componenetes
const Small = memo(({ counter: value }) => {
  console.log("Small +1 render");
  return (
    <div className="ml-3">
      <small>{value}</small>
    </div>
  );
});

export default Small;
