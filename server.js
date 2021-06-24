"use strict";
exports.__esModule = true;
var express = require("express");
//const express = require('express');
//Creo una app express
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Mis rutas
app.get('/', function (req, res) {
    var mensaje = 'Ruta Raiz del Servidor';
    res.send({ msg: mensaje });
});
app.get('/api/listar', function (req, res) {
    var mensaje = 'La ruta de listar';
    res.send({ msg: mensaje });
});
var PUERTO = 8080;
//Levanto el servidor
var server = app.listen(PUERTO, function () {
    console.log("Servidor corriendo en http://localhost:" + PUERTO);
});
server.on('error', function (error) {
    console.log("Error en el servidor: " + error);
});
