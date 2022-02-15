const express = require('express');
const router = express.Router();

const controller = require('../controller/controller');

router.get('/', controller.index);
router.post('/guardar', controller.guardar);
router.get('/detalle/:id', controller.detalle);
router.delete('/:id', controller.borrar);
router.put('/:id', controller.editar);

module.exports = router;