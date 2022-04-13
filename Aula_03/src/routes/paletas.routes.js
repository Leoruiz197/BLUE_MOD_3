const express = require('express');
const router = express.Router();

const paletasController = require('../controllers/paletas.controller');

router.get('/', paletasController.homePaletaController);
router.get('/find-paletas', paletasController.findPaletasController);
router.get('/find-paleta/:id', paletasController.findPaletaByIdController);

router.post('/add',paletasController.addPaletaController);

router.delete('/delete',);

module.exports = router;