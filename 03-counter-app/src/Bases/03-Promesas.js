import { getHeroeById } from "./data/import-export";

/* 
const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const heroe = getHeroeById(2);
        //el contenido de resolve es manejado por la promesa
        resolve(heroe);
        //si no encuentra resultado posible entonces se ejecuta el reject en lugar del resolve
        reject("No se pudo encontrar el heroe");
    }, 2000);
});

promesa
    .then((heroe) => {
        console.log("heroe: ", heroe);
    })
    .catch((err) => console.warn(err));
 */

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);
            heroe ? resolve(heroe) : reject("No se pudo encontrar el heroe");
        }, 2000);
    });
};

getHeroeByIdAsync(1)
    .then(
        //(heroe) => console.log("Heroe: ", heroe)
        console.log
    )
    .catch(
        //(err) => console.warn(err)
        console.warn
    );
