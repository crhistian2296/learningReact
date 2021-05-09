import { getUser, getUsuarioActivo } from "../base-pruebas/05-funciones";
import "@testing-library/jest-dom";

describe("Pruebas en 05-funciones", () => {
    test("getuser debe de retornar un objeto", () => {
        const userTest = {
            uid: "ABC123",
            username: "El_Papi1502",
        };

        const user = getUser();
        /* 
        Esto no funcionara porque aunqeu los objetos son iguales apuntan a direcciones en memoria distintas.
        Asi que para comparar objetos usamos toEqual
        expect(user).toBe(userTest);
        */
        expect(user).toEqual(userTest);
    });

    test("getUsuarioActivo debe de retornar un objeto", () => {
        const nombre = "Jake";
        const usuarioTestJake = {
            uid: "ABC567",
            username: nombre,
        };

        const usuario = getUsuarioActivo(nombre);

        expect(usuario).toEqual(usuarioTestJake);
    });
});
