const mongoose = require('mongoose');
const paletasService = require('../services/paletas.service');

const homePaletaController = (req,res) =>{
  res.send("home paletas");
};

const findPaletasController = async (req, res) => {
  const allPaletas = await paletasService.findPaletasService();
  res.send(allPaletas);
};

const findPaletaByIdController = async (req, res) => {
  const idParam = req.params.id;
  
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    res
      .status(400)
      .send({ message: 'ID inválido!' });
    return;
  }

  const chosenPaleta = await paletasService.findPaletaByIdService(idParam);

  if (!chosenPaleta) {
    return res.status(404).send({ message: "Paleta não encontrada!" })
  }
  res.send(chosenPaleta);
};

const findPaletaByValorController = (req, res) => {
  const valorParam = req.params.valor;
  const chosenPaletas = paletasService.findPaletaByValorService(valorParam);
  res.send(chosenPaletas);
};

// const validaEntrada = (nome) =>{
//   return nome.trim().toLowerCase();
// }

const addPaletaController = (req,res) => {
  const paleta = req.body;

  if (
    !paleta ||
    !paleta.sabor ||
    !paleta.descricao ||
    !paleta.foto ||
    !paleta.preco
  ) {
    return res.status(400).send(
      { message: 'Você não preencheu todos os dados para adicionar uma nova paleta ao cardápio!'}
    );
  }
  const newPaleta = paletasService.addPaletaService(paleta);
  res.send(newPaleta);
  // if(validaEntrada(req.body.sabor) == "banana"){

  // }
};

const updatePaletaController = (req, res) => {
  const idParam = +req.params.id;
  const paletaEdit = req.body;

  if (!paletaEdit || !paletaEdit.sabor || !paletaEdit.descricao || !paletaEdit.foto || !paletaEdit.preco) {
    return res.status(400).send({ message: "Você não preencheu todos os dados para editar a paleta!" });
  }

  const chosenPaleta = paletasService.findPaletaByIdService(idParam);

  if (!chosenPaleta) {
    return res.status(404).send({ message: "Paleta não encontrada para editar!" })
  }

  const updatedPaleta = paletasService.updatePaletaService(idParam, paletaEdit);
  res.send(updatedPaleta);
};

const deletePaletaController = (req, res) => {
  const idParam = req.params.id;

  const chosenPaleta = paletasService.findPaletaByIdService(idParam);

  if (!chosenPaleta) {
    return res.status(404).send({ message: "Paleta não encontrada para deletar!" })
  }

  paletasService.deletePaletaService(idParam);
  res.send({ message: 'Paleta deletada com sucesso!' });
};
module.exports = {
  homePaletaController,
  findPaletasController,
  findPaletaByIdController,
  findPaletaByValorController,
  addPaletaController,
  updatePaletaController,
  deletePaletaController
};