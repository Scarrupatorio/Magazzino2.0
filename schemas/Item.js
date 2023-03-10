var mongoose = require('mongoose');

mongoose.set('strictQuery', true);

var ItemSchema = new mongoose.Schema({
        nome: String,
        prezzo: Number,
        quantitÃ : Number,
        codice: Number,
        disponibilitÃ : String
}, {collection: 'TableM'});

module.exports = mongoose.model('Item',ItemSchema);
