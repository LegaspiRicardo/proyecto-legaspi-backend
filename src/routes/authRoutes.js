const express = require('express');
const {login} = require('../controllers/authController');

const router = express.Router();
//Ruta para iniciar sesion
route.post('/login', login);

module.exports = router;