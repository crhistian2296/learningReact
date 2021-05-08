import React, { useState } from "react";
import PropTypes from "prop-types";

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
            <h2> {counter} </h2>

            <button onClick={handleAdd}>Press Me</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleSubtract}>-1</button>
        </>
    );
};

CounterApp.prototype = {
    value: PropTypes.number.isRequired,
};
/* 
CounterApp.defaultProps = {
    value: 234234,
};
 */
export default CounterApp;
