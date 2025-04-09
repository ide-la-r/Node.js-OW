const express = require('express');

//Config .env
require('dotenv').config();

const app = express();

// GET http://localhost:3001/contactos
app.get('/contactos', (req, res) => {
    res.send('Lista de contactos')
});

app.post('/usuarios/nuevo', (req, res) => {
    res.send('Nuevo usuario');
})

const PORT = process.env.PORT || 3001;//Si no viene definido el puerto del .env se pone el 3001

app.listen(PORT, () =>{
    console.log(`Servidor escuchando en puerto ${PORT}`);
});