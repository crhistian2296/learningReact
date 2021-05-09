import "@testing-library/jest-dom";

describe("Pruebas en demo.test.js", () => {
    test("should say true", () => {
        const say = true;

        if (!say) {
            throw new Error("Fatal error");
        }
    });

    test("should be the same", () => {
        const mensaje = "Hola caracola";
        const mensaje2 = "Hola caracola";
        expect(mensaje).toBe(mensaje2);
    });
});
