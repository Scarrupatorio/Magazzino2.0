var mongoose = require('mongoose');

mongoose.set('strictQuery', true);

var Woman = new mongoose.Schema({
        nome: String,
        quantità: Number,
        prezzo: Number
}, {collection: 'TableWoman'});

module.exports = mongoose.model('Woman',Woman);
