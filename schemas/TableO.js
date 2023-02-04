var mongoose = require('mongoose');

mongoose.set('strictQuery', true);

var TableO = new mongoose.Schema({
        numero_ordine: Number,
        nome_ordine: String,
        numero_prodotti: Number,
        prezzo: String
}, {collection: 'TableO'});

module.exports = mongoose.model('TableO',TableO);
