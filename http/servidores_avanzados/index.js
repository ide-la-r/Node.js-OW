const http = require('node:http');
const fs = require('node:fs/promises');

const server = http.createServer(async (req, res) => {
    if (req.url === '/') {
        const html = await fs.readFile('./index.html', 'utf-8');
        res.writeHead(200, {'Content-Type': 'text/html'});//aqui decimos que si pone bien la url le devolvemos el html
        res.end(html);
    } else{
        res.writeHead(404, {'Content-Type': 'text/plain'});//aqui le decimos que si pone mal la url le devolvemos un error en texto plano
        res.end('404 Not Found');
    }
});

server.listen(3000);//aqui ponemos el puerto donde se va a ejecutar el servidor