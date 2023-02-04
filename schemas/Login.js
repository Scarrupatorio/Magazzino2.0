var mongoose = require('mongoose');

mongoose.set('strictQuery', true);

var Log = new mongoose.Schema({
        username: String,
        password: String
}, {collection: 'Login'});

module.exports = mongoose.model('Log',Log);
