//Requiriendo express para obtener sus funcionalidades
const express = require('express');

//Ejecutando la funcionalidad de rutas de express
const router = express.Router();

//Requiriendo el controlador para obtener sus funcionalidades
const mainController = require('../controllers/mainController');
const productsController = require('../controllers/productsController');

//Requiriendo las validaciones
const validacionesAyuda = require('../middlewares/validacionAyuda')

//Rutas (sin el prefijo definido en app.js)
router.get('/', mainController.inicio);
router.get('/ayuda', mainController.ayuda);
router.get('/charge', productsController.productCharge);
router.get('/dash', mainController.dashboard);
router.post('/ayuda', validacionesAyuda, mainController.envioAyuda);

//Exportando al router para que pueda ser usado por el entry point
module.exports = router;