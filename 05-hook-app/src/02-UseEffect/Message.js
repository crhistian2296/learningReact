import React, { useEffect, useState } from "react";

export const Message = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { x, y } = position;
  useEffect(() => {
    //En este ambiente se escribe el codigo a ejecutar cuando se monte el componente
    console.log("componente montado");

    const mouseMove = (e) => {
      const { x, y } = e;

      setPosition(() => ({
        x: e.x,
        y: e.y,
      }));

      return console.log({ x, y });
    };
    window.addEventListener("mousemove", mouseMove);

    // En esta parte se escribe el codigo a ejecutar cuando se desmonte el componente
    return () => {
      window.removeEventListener("mousemove", mouseMove);
      console.log("componente desmontado");
    };
  }, []);

  return (
    <>
      <h3>Eres un peso pesado</h3>
      <p>
        x:{x} , y:{y}
      </p>
    </>
  );
};

export default Message;
