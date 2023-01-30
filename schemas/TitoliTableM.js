var mongoose = require('mongoose');

mongoose.set('strictQuery', true);

var TitoliTableM = new mongoose.Schema({
        nome: String
}, {collection: 'TableMTitle'});

module.exports = mongoose.model('Titles',TitoliTableM);
