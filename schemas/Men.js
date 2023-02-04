var mongoose = require('mongoose');

mongoose.set('strictQuery', true);

var Men = new mongoose.Schema({
        nome: String,
        quantità: Number,
        prezzo: Number
}, {collection: 'TableMan'});

module.exports = mongoose.model('Men',Men);
