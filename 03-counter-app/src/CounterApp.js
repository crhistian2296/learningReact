import React, { useState } from "react";
import PropTypes from "prop-types";

//las props entran como objetos que usualmente se desestructuran en los parametros del componente
const CounterApp = ({ value }) => {
    const [counter, setcounter] = useState(value);

    //handleAdd
    const handleAdd = () => {
        //setcounter(counter + 1);
        setcounter((a) => a + 1);
    };
    const handleSubtract = () => {
        //setcounter(counter + 1);
        setcounter((a) => a - 1);
    };
    const handleReset = () => {
        //setcounter(counter + 1);
        setcounter(() => value);
    };

    return (
        <>
            <h1>CounterApp</h1>
            <h2 id="contador"> {counter} </h2>

            <button id="bAdd" onClick={handleAdd}>
                +1
            </button>
            <button id="bReset" onClick={handleReset}>
                Reset
            </button>
            <button id="b-1" onClick={handleSubtract}>
                -1
            </button>
        </>
    );
};

CounterApp.prototype = {
    value: PropTypes.number.isRequired,
};

CounterApp.defaultProps = {
    value: 10,
};

export default CounterApp;
