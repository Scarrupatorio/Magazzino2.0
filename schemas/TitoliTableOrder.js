var mongoose = require('mongoose');

mongoose.set('strictQuery', true);

var TitoliTableOrder = new mongoose.Schema({
        nome: String
}, {collection: 'TableOTitle'});

module.exports = mongoose.model('TitlesO',TitoliTableOrder);
