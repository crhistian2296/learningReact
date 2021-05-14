import React from "react";
import PrimeraApp from "../PrimeraApp";
import { shallow } from "enzyme";
// import { render } from "@testing-library/react";

describe("Pruebas en <PrimeraApp /> ", () => {
    /* 
    Solo funciona con import "@testing-library/jest-dom/extend-expect en estupTests.js
    test('Debe mostrar el Mensaje "Hola soy Goku"', () => {
        const saludo = "Hola soy Goku";

        const { getByText } = render(<PrimeraApp saludo={saludo} />);
        expect(getByText(saludo)).toBeInTheDocument();
    });
        */
    let saludo = "Hola soy Goku";
    let wrapper = shallow(<PrimeraApp saludo={saludo} />);

    test("Deberia de mostrar <PrimeraApp /> correctamente", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test("Debe mostrar el subtitulo enviado pro props", () => {
        const subtitulo = "Hey, pagame lo que me debes";

        wrapper = shallow(<PrimeraApp saludo={saludo} subtitulo={subtitulo} />);

        const textoParrafo = wrapper.find("#campanilla").text();

        expect(textoParrafo).toBe(subtitulo);
    });
});
