const personajes = ["Goku", "Vegeta", "Bills", "Xeno"];

//cada "," ignora un elemento del array
const [, , , xeno] = personajes;
console.log(xeno);

const retornaArr = () => ["ABC", 123];
const [letras, numeros] = retornaArr();
console.log("Estas son las letras => ", letras);
console.log("Estas son los numeros => ", numeros);

const usarEstado = (nombre) => {
    return [
        nombre,
        (name) => console.log("Tu nombre es: ", name)
    ];
};

const [nombre, setNombre] = usarEstado("Goku");
console.log(nombre);
setNombre("PAPU SCANNOR");