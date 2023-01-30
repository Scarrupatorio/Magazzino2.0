var mongoose = require('mongoose');

mongoose.set('strictQuery', true);

var TableS = new mongoose.Schema({
        nome: String,
        quantità: Number,
        stato_ordine: String
}, {collection: 'TableS'});

module.exports = mongoose.model('Ship',TableS);
