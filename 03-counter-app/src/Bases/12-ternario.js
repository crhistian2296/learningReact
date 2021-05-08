/* 
FORMA TRADICIONAL
let activo = true; 
let mensaje = '';

if (activo) {
    console.log("Activo");
} else {
    console.log('Inactivo');
}
 */
/* 
FORMA TERNARIA
const activo = true;

let menseje = activo ? "Activo" : "Inactivo";
console.log(mensaje);
 */
//FORMA ABREVIADA DEL TERNARIO
const activo = true;

let menseje = activo && "Activo";
console.log(mensaje);
