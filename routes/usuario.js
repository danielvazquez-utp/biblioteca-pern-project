// Importación de controlador
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// Rutas con método GET
router.get('/', usuarioController.getAll); // Recuperar todos los usuarios
router.get('/:id', usuarioController.getById); // Recuperar un usuario por Id

// Rutas con métodos POST
router.post('/', usuarioController.create);

// Rutas con métodos PUT
router.put('/:id', usuarioController.update);

// Rutas con métodos DELETE
router.delete('/:id', usuarioController.delete);

module.exports = router;