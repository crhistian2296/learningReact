import { getHeroeByIdAsync } from "../base-pruebas/09-promesas";
import heroes from "../base-pruebas/data/heroes";

describe("Pruebas con promesas", () => {
    //el parametro de la F.callback determina el fin de la ejecucion del programa
    //este argumento es necesario para testear promesas. El nombre del mismo no importa
    test("getHeroesByIdAsync debe retornar un heroe async", (done) => {
        const id = 1;

        const p1 = getHeroeByIdAsync(id).then((heroe) => {
            expect(heroe).toBe(heroes[0]);
            //expect(heroe).toBe(heroes[2]);
            done();
        });
    });

    test("Debe obtener un error si el heroe por id no existe", (end) => {
        getHeroeByIdAsync(9).catch((error) => {
            expect(error).toBe("No se pudo encontrar el héroe");
        });
        end();
    });
});
