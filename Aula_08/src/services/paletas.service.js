// const paletas = [
//     {
//         id: 1,
//         sabor: 'Açaí com Leite Condensado',
//         descricao:
//         'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
//         foto: './assets/images/acai-com-leite-condensado.png',
//         preco: 10.0,
//     },
//     {
//         id: 2,
//         sabor: 'Banana com Nutella',
//         descricao:
//         'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
//         foto: './assets/images/banana-com-nutella.png',
//         preco: 10.0,
//     },
//     {
//         id: 3,
//         sabor: 'Chocolate Belga',
//         descricao:
//         'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
//         foto: './assets/images/chocolate-belga.png',
//         preco: 7.0,
//     },
// ];

const Paleta = require('../models/Paleta');

const findPaletasService = async () => {
    const paletas = await Paleta.find();
    return paletas;
};

const findPaletaByIdService = async (id) => {
    const paleta = await Paleta.findById(id);
    return paleta;
};

const findPaletaByValorService = (valor) => {
    return paletas.filter((paleta) => paleta.preco <= valor);
};
const addPaletaService = (paleta) =>{
    paletas.push(paleta);
    return paleta;
};

const updatePaletaService = (id, paletaEdited) => {
    paletaEdited['id'] = id;
    const paletaIndex = paletas.findIndex((paleta) => paleta.id == id);
    paletas[paletaIndex] = paletaEdited;
    return paletaEdited;
};

const deletePaletaService = (id) => {
    const paletaIndex = paletas.findIndex((paleta) => paleta.id == id);
    return paletas.splice(paletaIndex, 1);
};

module.exports = {
    findPaletasService,
    findPaletaByIdService,
    findPaletaByValorService,
    addPaletaService,
    updatePaletaService,
    deletePaletaService
};