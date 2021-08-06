import { shallow } from "enzyme";
import React from "react";
import GifGridItem from "../../components/GifGridItem";

describe("Pruebas en GifgridItem", () => {
    test("Debe mostrar el componente correctamenete", () => {
        const wrapper = shallow(<GifGridItem url="url" title="title" />);
        expect(wrapper).toMatchSnapshot();
    });
});
