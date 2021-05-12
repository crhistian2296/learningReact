//Enzyme
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });

//Enzyme to JSON
import { createSerializer } from "enzyme-to-json";
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

//import "@testing-library/jest-dom/extend-expect";
