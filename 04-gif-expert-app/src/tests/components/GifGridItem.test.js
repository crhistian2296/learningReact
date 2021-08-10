import { shallow } from "enzyme";
import React from "react";
import GifGridItem from "../../components/GifGridItem";

const title = "titulo generico";
const url = "url generico";
const wrapper = shallow(<GifGridItem url={url} title={title} />);

describe("Pruebas en GifgridItem", () => {
    test("Debe mostrar el componente correctamenete", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test("Debe de tener un titulo dentro del figcaption", () => {
        const figcaptionTitle = wrapper.find("figcaption");
        expect(figcaptionTitle.text().trim()).toBe(title);
    });

    test("Debe de tener una imagen de igual url y alt dentro del component", () => {
        const img = wrapper.find("img");
        expect(img.prop("src")).toBe(url);
        expect(img.prop("alt")).toBe(title);
    });

    test("Debe de tener la clase animate__fadeIn", () => {
        const figure = wrapper.find("figure");
        expect(figure.prop("className").includes("animate__fadeIn")).toBe(true);
    });
});
