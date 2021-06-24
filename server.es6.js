const express = require('express');

//Creo una app express
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Mis rutas

app.get('/',(req, res) =>{
    let mensaje= 'Ruta Raiz del Servidor';
    res.send({msg: mensaje});
});

app.get('/api/listar', (req, res) => {
    let mensaje = 'La ruta de listar';
    res.send({msg: mensaje});
});

const PUERTO = 8080;

//Levanto el servidor
const server = app.listen(PUERTO,() => {
    console.log(`Servidor corriendo en http://localhost:${PUERTO}`);
});

server.on('error', error =>{
console.log(`Error en el servidor: ${error}`);

});
