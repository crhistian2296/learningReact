import React from "react";
import ReactDom from "react-dom";
//import PrimeraApp from "./PrimeraApp";
import CounterApp from "./CounterApp";
import "./index.css";

const divRoot = document.querySelector("#root");
//ReactDom.render(<PrimeraApp saludo="I miss U my love" />, divRoot);
ReactDom.render(<CounterApp value={2432} />, divRoot);
