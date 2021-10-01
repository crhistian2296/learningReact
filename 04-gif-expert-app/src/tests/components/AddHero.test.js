import { shallow } from "enzyme";
// import '@testing-library/jest-dom'
import React from "react";
import AddHero from "../../components/AddHero";

describe("Pruebas en <AddHero/>", () => {
    const setHeroes = jest.fn();
    //se define completamente el wrapper 2 veces para conservar la ayuda de autocompletado
    let wrapper = shallow(<AddHero setHeroes={setHeroes} />);
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddHero setHeroes={setHeroes} />);
    });

    test("Debe mostrar el componente correctamente", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test("Debe mostrar los cambios en el input", () => {
        const input = wrapper.find("input");
        const value = "Hola mundo";

        input.simulate("change", { target: { value } });
        //Se espera que el parrafo tenga el valor modificado del input
        expect(wrapper.find("p").text().trim()).toBe(value);
    });

    test("Debe evitar establecer una nueva categoria vacia", () => {
        wrapper.find("form").simulate("submit", { preventDefault() {} });
        // expect(setHeroes).not.toHaveBeenCalled();
        expect(setHeroes).not.toBeCalled();
    });

    //* Mock de la implementacion de un alert
    jest.spyOn(window, "alert").mockImplementation(() => {});

    test("Debe llamar un alert si se intenta un submit vacio", () => {
        wrapper.find("form").simulate("submit", { preventDefault() {} });
        // expect(setHeroes).not.toHaveBeenCalled();
        expect(window.alert).toBeCalled();
    });

    test("No Debe llamar un alert si se intenta un submit con contenido", () => {
        wrapper.find("input").simulate("change", { target: { value: "hola" } });
        wrapper.find("form").simulate("submit", { preventDefault() {} });
        // expect(setHeroes).not.toHaveBeenCalled();
        expect(window.alert).not.toHaveBeenCalled();
    });

    test("Debe llamara a setHeroes y limpiar la caja de texto", () => {
        wrapper.find("input").simulate("change", { target: { value: "hola" } });
        wrapper.find("form").simulate("submit", { preventDefault() {} });
        //fragmento que compureba si se llamo algun tipo de funcion
        expect(setHeroes).toHaveBeenCalledWith(expect.any(Function));
        expect(wrapper.find("input").prop("value").trim()).toBe("");
    });
});
