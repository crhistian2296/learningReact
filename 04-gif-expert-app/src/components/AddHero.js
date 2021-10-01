import PropTypes from "prop-types";
import React, { useState } from "react";

export default function AddHero({ setHeroes }) {
    const [inputValue, setInputValue] = useState(""); //useState tiene valor undefined por defecto

    const handleOnChange = (e) => {
        setInputValue(e.target.value);
        // console.log("El target fue alcanzado");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 0) {
            setHeroes((initialState) => [inputValue, ...initialState]);
            setInputValue("");
        } else
            alert(
                "Busqueda vacia, por favor introduzca el nombre del heroe antes de hacer la peticion"
            );
        // console.log("submit:", inputValue);
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* parrafo para hacer testing */}
            <p> {inputValue} </p>
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
};
