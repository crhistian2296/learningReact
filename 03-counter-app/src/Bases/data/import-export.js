import { heroes } from "./heroes";

//find()
export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);
//filter()
export const getHeroeByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

console.log(getHeroeById(2));
console.log(getHeroeByOwner("DC"));
