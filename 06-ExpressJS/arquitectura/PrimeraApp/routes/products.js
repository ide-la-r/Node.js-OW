const router = require('express').Router();

router.get('/', (req, res) =>{
    const { page, limit } = req.query;
    console.log(page, limit);
    console.log('CurrDate', req.currentDate);
    res.status(200).send('Recuperamos todos los productos');//ell status 200 es el de por defecto
});

router.get('/new', (req, res) =>{
    //res.json({ uno: 'uno', dos: 'dos'})//imprescindible para apis
    res.download('./public/images/image.png');//descargar ficheros
});

router.get('/:productId', (req, res) =>{
    const { productId } = req.params;//aqui estaran todos los valores que estaran en la URL en forma de clave/valor
    res.send(`Recupero el producto con ID: ${productId}`);
});

router.post('/create', (req, res) =>{
    const { name, price } = req.body;//aqui tenemos los datos de el json de la peticion
    console.log(name, price);
    res.send('Gestion de los datos del formulario');
});


module.exports = router;