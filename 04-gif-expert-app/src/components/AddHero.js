import React, { useState } from "react";
import PropTypes from 'prop-types'

export default function AddHero({ setHeroes }) {
    const [inputValue, setInputValue] = useState("Escribe");    //useState tiene valor undefined por defecto

    const handleOnChange = (e) => {
        setInputValue(e.target.value);
        // console.log(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 0) {
            setHeroes(initialState => [...initialState, inputValue]);
            setInputValue("");
        } else
            console.error('input void, please enter a hero name before submit your request');

        // console.log("submit:", inputValue);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                // placeholder="Nuevo heroe"
                onChange={handleOnChange}
            />
        </form>
    );
}

//validacion de requrimiento de setHeroes como proptype
AddHero.propTypes = {
    setHeroes: PropTypes.func.isRequired,
}
