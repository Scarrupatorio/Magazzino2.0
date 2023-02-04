var mongoose = require('mongoose');

mongoose.set('strictQuery', true);

var Prod = new mongoose.Schema({
        nome: String,
        prezzo: Number,
        descrizione: String
}, {collection: 'TableEcommerce'});

module.exports = mongoose.model('Prod',Prod);
