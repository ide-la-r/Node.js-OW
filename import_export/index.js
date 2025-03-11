const operaciones = require('./operaciones');
const { mult, sumar } = require('./operaciones');
const Persona = require('./persona')

const suma = operaciones.sumar(3,8);
const multiplicacion = mult(3, 8);

console.log(suma);
console.log(multiplicacion);

const pers = new Persona('Ismael', 'de la Rosa', 19);
console.log(pers.mostrar())