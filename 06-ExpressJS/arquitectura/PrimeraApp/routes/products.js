const router = require('express').Router();

router.get('/', (req, res) =>{
    res.send('Recuperamos todos los productos');
});

router.get('/:productId', (req, res) =>{
    const { productId } = req.params;//aqui estaran todos los valores que estaran en la URL en forma de clave/valor
    res.send(`Recupero el producto con ID: ${productId}`);
});

router.get('/new', (req, res) =>{
    res.send('Formulario para crear productos');
});

router.post('/create', (req, res) =>{
    const { name, price } = req.body;//aqui tenemos los datos de el json de la peticion
    console.log(name, price);
    res.send('Gestion de los datos del formulario');
});


module.exports = router;