import React from "react";
import useCounter from "../hooks/useCounter";
import useFetch from "../hooks/useFetch";

const MultiplesCustomHooks = () => {
  const { counter, increment } = useCounter(1);
  const { data, loading } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  const { quote, author } = !loading && data[0];

  // console.log("data:", data, "loading:", loading);
  // console.log("Quote:", quote);
  // console.log("Author:", author);
  return (
    <div className="m-5">
      <h1>Custom Hooks!!!</h1>
      <hr />
      {loading ? (
        <div className="alert alert-info">loading...</div>
      ) : (
        <blockquote className="blockquote text-right">
          <p className="text-right">{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}
      <button className="btn btn-primary" onClick={increment}>
        Next quote
      </button>
    </div>
  );
};

export default MultiplesCustomHooks;
