import React from "react";
import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe("Pruebas en CounterApp", () => {
    //Funciones
    const setCounterApp = (valor) => (valor ? shallow(<CounterApp value={valor} />) : shallow(<CounterApp />));
    const getCounterValue = (wrapper) => parseInt(wrapper.find("#contador").text().trim());

    //Iniciales
    let wrapper = setCounterApp(); //Mala practica pero no pierdo el intelisense
    beforeEach(() => {
        //Ejecuta antes de evaluar cada test
        wrapper = setCounterApp(); //reinicia el componente a sus calores por defecto
    });

    test("Debe de mostrar <CounterApp /> correctamente", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test("Debe hacer match en 100", () => {
        const wrapper = setCounterApp(100);
        const contador = getCounterValue(wrapper);

        expect(contador).toBe(100);
    });

    test("Debe de incrementar con el boton +1", () => {
        //Se simula el click
        wrapper.find("#bAdd").simulate("click");
        //Se obtiene el valor nuevo del contador
        const contadorNuevo = getCounterValue(wrapper);
        //console.log(contadorNuevo);
        expect(contadorNuevo).toBe(11);
    });

    test("Debe de decrementar con el boton -1 ", () => {
        wrapper.find("#b-1").simulate("click");
        const contadorNuevo = getCounterValue(wrapper);
        //console.log(contadorNuevo);
        expect(contadorNuevo).toBe(9);
    });

    test("Debe de colocar el valor por defecto con el boton reset", () => {
        const wrapper = setCounterApp(20);
        wrapper.find("#bAdd").simulate("click");
        wrapper.find("#bAdd").simulate("click");
        wrapper.find("#bAdd").simulate("click"); //23

        wrapper.find("#bReset").simulate("click");

        const contador = getCounterValue(wrapper);
        expect(contador).toBe(20);
    });
});
