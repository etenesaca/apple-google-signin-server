const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// body-parser
app.use( bodyParser.urlencoded({ extended: true })) ;

// Ruta
app.use('/', require('./routes/auth'));


const appPort = process.env.PORT || 3000;
app.listen(appPort, () => {
    console.log(`Servidor corriendo en el puerto ${appPort}`);
});