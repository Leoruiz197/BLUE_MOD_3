const express = require('express');
const router = express.Router();

const paletasController = require('../controllers/paletas.controller');
const { validId, validObjectBody } = require('../middlewares/paleta.middleware');

router.get('/', paletasController.homePaletaController);
router.get('/find-paletas', paletasController.findPaletasController);
router.get('/find-paleta/:id',validId, paletasController.findPaletaByIdController);
router.get('/find-paleta-valor/:valor', paletasController.findPaletaByValorController);

router.post('/add',validObjectBody, paletasController.addPaletaController);

router.put('/update/:id',validId, validObjectBody, paletasController.updatePaletaController);

router.delete('/delete/:id',validId, paletasController.deletePaletaController);

module.exports = router;