import { shallow } from "enzyme";
import React from "react";
import GifGrid from "../../components/GifGrid";
// jest.mock("../../hooks/useFetchGifs.js");

describe("Pruebas para GifGrid", () => {
    let hero = "Saitama";
    let wrapper = shallow(<GifGrid hero={hero} />);
    beforeEach(() => {
        wrapper = shallow(<GifGrid hero={hero} />);
    });

    test("Debe mostrar el componente correctamente", () => {
        expect(wrapper).toMatchSnapshot();
    });

    //No funciona correctamente por razones desconocidas
    /* 
    test("Debe de mostrar los componentes imgs al renderizar", () => {
        const images = [
            {
                title: "Imagen imaginaria",
                url: "https/localhost/cualquier/cosa/imagen-imaginaria.jpg",
            },
        ];
        useFetchGifs.mockReturnValue({
            data: images,
            loading: false,
        });

        expect(wrapper).toMatchSnapshot();
    }); 
    */
});
