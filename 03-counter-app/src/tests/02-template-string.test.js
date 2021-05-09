import "@testing-library/jest-dom";
import { getSaludo } from "../base-pruebas/02-template-string";

describe("Pruebas en 02-template-string", () => {
    test("getSaludo debe retornar Hola Crhistian!", () => {
        const name = "Crhistian";
        const greetingMe = getSaludo(name);

        expect(greetingMe).toBe("Hola " + name + "!");
    });

    test("getSaludo debe retornar Hola Carlos! si no hay argumentos", () => {
        const greetingMe = getSaludo();

        expect(greetingMe).toBe("Hola Carlos!");
    });
});
