var mongoose = require('mongoose');

mongoose.set('strictQuery', true);

var ItemSchema = new mongoose.Schema({
        nome: String,
        prezzo: Number,
        quantità: Number,
        codice: Number,
        disponibilità: String
}, {collection: 'TableM'});

module.exports = mongoose.model('Item',ItemSchema);
