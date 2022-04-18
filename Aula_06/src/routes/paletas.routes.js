const express = require('express');
const router = express.Router();

const paletasController = require('../controllers/paletas.controller');

router.get('/', paletasController.homePaletaController);
router.get('/find-paletas', paletasController.findPaletasController);
router.get('/find-paleta/:id', paletasController.findPaletaByIdController);
router.get('/find-paleta-valor/:valor', paletasController.findPaletaByValorController);

router.post('/add',paletasController.addPaletaController);

router.put('/update/:id', paletasController.updatePaletaController);

router.delete('/delete/:id', paletasController.deletePaletaController);

module.exports = router;