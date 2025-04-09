const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Lista de usuarios');
});

router.get('/edit', (req, res) => {
  res.send('Formulario de edicion');
});

router.post('/update', (req, res) => {
  res.send('Gestion del formulario de edicion');
});

module.exports = router;
