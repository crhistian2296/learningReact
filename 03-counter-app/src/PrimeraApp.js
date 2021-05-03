//import React, { Fragment } from "react";
import React from "react";
import PropTypes from "prop-types";

//solo se dara el valor por defecto si no se crea prop alguna al momento de llamar al componente
const PrimeraApp = ({ saludo }) => {
    /*     
    const saludo = {
        nombre: "Crhistian",
        edad: 25,
    };
    //<pre>{JSON.stringify(saludo, null, 1)}</pre>
 */

    //console.log(props);
    //const saludo = "Hola mundo, este es mi primer componente";
    return (
        /*         
        <Fragment>
            <h1>Hola mundo, este es mi primer componente</h1>
            <p>Para mi primera aplicacion</p>
        </Fragment>
        */

        //Forma rapida
        <>
            <h1>{saludo}</h1>
            <p>Para mi primera aplicacion</p>
        </>
    );
};

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
};

export default PrimeraApp;
