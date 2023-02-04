var mongoose = require('mongoose');

mongoose.set('strictQuery', true);

var TitlesS = new mongoose.Schema({
        nome: String,
}, {collection: 'TableSTitle'});

module.exports = mongoose.model('TitlesS',TitlesS);
