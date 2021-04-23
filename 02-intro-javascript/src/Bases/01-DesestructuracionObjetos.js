console.log("Hola pendejos");

let persona = {
    nombre: "Crhistian",
    apellido: "Garcia",
    edad: 21,
};

console.table(persona);

const arreglo = [1, 2, 3, 4];

let arreglo2 = [...arreglo, 5];
const arreglo3 = arreglo2.map((x) => x + 3);

const getUsuarioActivo = (nombre) => ({
    uid: "ABC123",
    username: nombre,
});

const usuarioActivo = getUsuarioActivo("carlitos");

console.table(usuarioActivo);

console.log(arreglo2);
console.log(arreglo3);

const personaExample = {
    nombre: "Tony",
    edad: 45,
    clave: "Ironman",
};

const { nombre, edad, clave } = personaExample;

console.group("Avenger");
console.log(nombre);
console.log(edad);
console.log(clave);
console.groupEnd();

//Forma desestructuracion clasica
/* 
const retornaPersona = (usuario) => {
    const { nombre, edad, clave } = usuario;
    console.log(nombre, edad, clave);
};
 */

//Forma desestructuracion en el propio argumento
const retornaPersona = ({ usuario }) => {
    // console.log("Forma desestructurada: ", nombre, edad, clave);

    return {
        nombreClave: clave,
        years: edad,
        //propiedades adicionales
        latlng: {
            lat: 12.523,
            lng: -35.234,
        },
    };
};

const {
    nombreClave,
    years,
    latlng: { lat, lng },
} = retornaPersona(personaExample);
console.log(nombreClave, years);
console.log(lat, lng);
