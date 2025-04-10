var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });//render lo que hace es decirle que vamos a enviar un objeto html
});

module.exports = router;
