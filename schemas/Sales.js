var mongoose = require('mongoose');

mongoose.set('strictQuery', true);

var Sales = new mongoose.Schema({
        nome: String,
        quantità: Number,
        prezzo: Number
}, {collection: 'TableSale'});

module.exports = mongoose.model('Sales',Sales);
