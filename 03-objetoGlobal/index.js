/*
console.log(__dirname);//Hace referencia a la ruta completa donde estamos trabajando
console.log(__filename);//Ruta completa hasta el fichero que estamos ejecutando
*/

//console.log(process.argv)

function getParam(param) {
    const index = process.argv.indexOf(param);
    return index === -1 ? null : process.argv[index + 1];
}

const nombre = getParam('--nombre');
const edad = getParam('--edad');

if (nombre && edad) {
    console.log(`El nombre es ${nombre} y la edad es ${edad}`);
} else {
    console.log('Alguno de los valores es nulo')
}