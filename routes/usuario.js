var express = require('express');
var usuarioControllers= require('../controllers/usuario.controller');

var api = express.Router();

api.post('/registro', usuarioControllers.registro);

api.post('/login', usuarioControllers.login)

module.exports = api;