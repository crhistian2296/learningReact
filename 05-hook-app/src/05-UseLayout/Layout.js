import React, { useLayoutEffect, useRef, useState } from "react";
import useCounter from "../hooks/useCounter";
import useFetch from "../hooks/useFetch";

const Layout = () => {
  const { counter, increment } = useCounter(1);
  const { data, loading } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  const { quote } = !loading && data[0];
  const [boxSize, setBoxSize] = useState({});
  const parrafo = useRef();

  useLayoutEffect(() => {
    //getBoundingClientRect() obtiene dimensiones y posicion de un elemento del DOM
    setBoxSize(parrafo.current.getBoundingClientRect());
  }, [quote]);

  return (
    <div className="m-5">
      <h1>Custom Hooks!!!</h1>
      <hr />
      <blockquote className="blockquote text-right d-flex">
        <p ref={parrafo}>{quote}</p>
      </blockquote>
      <pre>{JSON.stringify(boxSize, null, 2)}</pre>
      <button className="btn btn-primary" onClick={() => increment()}>
        Next quote
      </button>
    </div>
  );
};

export default Layout;
