var mongoose = require('mongoose');

mongoose.set('strictQuery', true);

var Kids = new mongoose.Schema({
        nome: String,
        quantità: Number,
        prezzo: Number
}, {collection: 'TableKids'});

module.exports = mongoose.model('Kids',Kids);
