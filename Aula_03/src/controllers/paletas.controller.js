const paletasService = require('../services/paletas.service');

const homePaletaController = (req,res) =>{
  res.send("home paletas");
};

const findPaletasController = (req, res) => {
  const allPaletas = paletasService.findPaletasService();
  res.send(allPaletas);
};

const findPaletaByIdController = (req, res) => {
  const idParam = req.params.id;
  const chosenPaleta = paletasService.findPaletaByIdService(idParam);
  res.send(chosenPaleta);
};

const findPaletaByValorController = (req, res) => {
  const valorParam = req.params.valor;
  const chosenPaletas = paletasService.findPaletaByValorService(valorParam);
  res.send(chosenPaletas);
};

const addPaletaController = (req,res) => {
  let retorno;

  if(req.body.id){
    retorno = paletasService.addPaletaService(req.body);
  }else{
    res.send({erro: 'id é obrigatório'});
  }
  if(retorno == 'ok'){
    res.send({message:'paleta cadastrada com sucesso'});
  }else{
    res.send('ops, houve um erro, paleta nao foi cadastrada');
  }
};

const updatePaletaController = (req, res) => {
  const idParam = +req.params.id;
  const paletaEdit = req.body;
  const updatedPaleta = paletasService.updatePaletaService(idParam, paletaEdit);
  res.send(updatedPaleta);
};

const deletePaletaController = (req, res) => {
  const idParam = req.params.id;
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