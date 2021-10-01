import { getGifs } from "../../helpers/getGifs";

describe("Pruebas en getGifs", () => {
    test("Deberia retornar un array de 15 elementos", async () => {
        const gifs = await getGifs("genos");
        expect(gifs.length).toBe(15);
    });
});
