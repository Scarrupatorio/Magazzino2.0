var mongoose = require('mongoose');

mongoose.set('strictQuery', true);

var cont = new mongoose.Schema({
        i: Number
}, {collection: 'cont'});

module.exports = mongoose.model('cont',cont);
