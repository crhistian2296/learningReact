import { getImagen } from "../base-pruebas/11-async-await";
describe("Pruebas con async-await y fetch", () => {
    test("Debe indicar que url hace una peticion de datos", async () => {
        const url = await getImagen();
        //console.log(url);

        await fetch(url)
            .then((resp) => {
                expect(resp.status).toBe(200); //200 significa OK, que la respuesta fue correcta
            })
            .catch((error) => {
                console.error(error);
            });
    });
});
