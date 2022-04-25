const mongoose = require('mongoose');

function connectToDatabase() {
    mongoose.connect('mongodb+srv://admin:BLUE2021@api-elgeladon.69rvf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(() => {
        console.log('MONGO DB CONECTADO');
    }).catch((err) => {
        return console.log(`Erro na conexao com o banco: ${err}`);
    });
}

module.exports = connectToDatabase;