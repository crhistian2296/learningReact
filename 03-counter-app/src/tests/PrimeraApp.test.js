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

    test("Deberia de mostrar <PirmeraApp /> correctamente", () => {
        const saludo = "Hola soy Goku";
        const wrapper = shallow(<PrimeraApp saludo={saludo} />);

        expect(wrapper).toMatchSnapshot();
    });
});
