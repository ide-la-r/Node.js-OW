//crear interfaz de consola
const readline = require('readline');
const fs = require('fs');

//interaccionar con la interfaz, entrada y salida.
const rl = readline.createInterface(process.stdin, process.stdout);

rl.question('¿Como te llamas?', (answer) => {
    const stream = fs.createWriteStream(`./${answer}.md`)

    //Cargar el texto que queremos ver en la consola
    rl.setPrompt('¿Que quieres decir? (exit si quieres salir)');
    rl.prompt();//escribirlo en la consola

    //Cada vez que se escriba al go se ejecuta esta accion
    rl.on('line', (data) => {
        if(data.toLowerCase().trim() === 'exit'){
            stream.close();//Cerramos consola e interfaz
            rl.close();
        } else{
            stream.write(`${data}\n`);
            rl.prompt();
        }
    })
});

rl.on('close', () => {
    console.log('Se termina la escritura')
})