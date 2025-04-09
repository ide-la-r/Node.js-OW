const http = require('node:http')
const fs = require('node:fs')

http.createServer((req,res) =>{
    if (req.method === 'GET') {
        //retornar el formulario
        res.writeHead(200,{'content-type': 'text/html'});
        fs.createReadStream('./public/formulario.html', 'utf-8').pipe(res);//Ponemos en res el resultado la lectura del fichero formulario
    } else if(req.method === 'POST'){
        //gestionar el valsor del formulario
        let body = '';

        req.on('data', chunk =>{//el evento data es recibir todos los datos que se reciben con el post, el chunk son las porciones de ese data
            body += chunk;
        });

        //cuando termine de recibir todas las porciones:
        req.on('end', () =>{
            res.end(body);//lo devuelvo para ver la respuesta
        })
    }
}).listen(3001)