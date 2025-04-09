const http = require('node:http');
const data = require('./public/productos.json')

http.createServer((req,res) => {
    res.writeHead(200, {'content-type': 'application/json'});//vamos a devolver un json
    res.end(JSON.stringify(data));//Pasamos los datos del json a string
}).listen(3001)