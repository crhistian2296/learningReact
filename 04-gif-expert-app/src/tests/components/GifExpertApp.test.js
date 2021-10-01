import { shallow } from "enzyme";
import React from "react";
import GifExpertApp from "../../GifExpertApp";

let wrapper = shallow(<GifExpertApp />);
beforeEach(() => {
    wrapper = shallow(<GifExpertApp />);
});

describe("Pruebas en el componente <GifExpertApp/>", () => {
    test("Debe renderizar el componente GifExpertApp correctamente", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test("Debe de mostrar una lista de heroes en busqueda", () => {
        const heroList = ["Papunika", "Hunterxhunter", "Deadpool"];
        wrapper = shallow(<GifExpertApp defaultHero={heroList} />);
        expect(wrapper.find("GifGrid").length).toBe(heroList.length);
        expect(wrapper).toMatchSnapshot();
    });
});
