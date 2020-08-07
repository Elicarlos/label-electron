const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const mysql = require('mysql');


//Configurando Bodyparser
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json);

// Cria o routeador
const router = express.Router();

//aqui criamos a rota
router.get('/', (req, res) => res.json({ message: 'Funcionando '}));

//adcionamos a rota ao app
app.use('/', router);


app.listen(port);
console.log('Api funcionando');
