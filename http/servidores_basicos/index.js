const http = require('node:http');

const server = http.createServer((req, res) => {
    console.log('Metodo', req.method);
    console.log('Url', req.url);
    console.log('Headers', req.headers);
    res.end('Hola server');
})

server.listen(3000);//aqui ponemos el puerto donde se va a ejecutar el servidor