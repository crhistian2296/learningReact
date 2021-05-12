import { getHeroeById, getHeroesByOwner } from "../base-pruebas/08-imp-exp";

describe("Pruebas en funciones de heroes", () => {
    let id = 2;
    let heroe = getHeroeById(id);
    let franquicia = "DC";
    let heroes = getHeroesByOwner(franquicia);

    test("Deberia retornarme Spiderman", () => {
        expect(heroe.name).toBe("Spiderman");
    });

    test("Deberia retornar los nombres de los heroes de DC", () => {
        franquicia = "DC";
        heroes = getHeroesByOwner(franquicia);

        const namesHeroes = heroes.map((heroe) => heroe.name);
        expect(namesHeroes).toEqual(["Batman", "Superman", "Flash"]);
    });

    test("Deberia retornar undefined si hero no existe", () => {
        id = 13;
        heroe = getHeroeById(id);
        expect(heroe).toBe(undefined);
    });

    test("Deberia retornar los objetos de los heroes de DC", () => {
        franquicia = "Marvel";
        heroes = getHeroesByOwner(franquicia);

        expect(heroes).toEqual([
            {
                id: 2,
                name: "Spiderman",
                owner: "Marvel",
            },
            {
                id: 5,
                name: "Wolverine",
                owner: "Marvel",
            },
        ]);
    });
});
