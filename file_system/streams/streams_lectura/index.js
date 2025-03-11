const fs = require('fs');

const stream = fs.createReadStream('../ficheros/fichero_grande.md', 'utf-8');
let body = '';

//es igual que el on pero solo se ejecuta la primera vez, es decir solo coge el primer paquete
stream.once('data', () => {
    console.log("Empieza la lectura")
});

//chunk es como los minipaquetes de datos, como es un fichero grande lo que hace es separarlos en pequeños paquetes, pues eso son los chunks
stream.on('data', chunk => {
    //console.log('Recibo datos...');
    body += chunk;
});

//cuando finaliza la lectura de el fichero
stream.on('end', () => {
    console.log(`Body: ${body.length}`);
})