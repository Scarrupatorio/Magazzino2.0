var express = require('express');
var router = express.Router();
var Woman = require('../schemas/Woman');


/* GET pagina password dimenticata. */
router.get('/women', function (req, res, next) {
    Woman.find({}, {nome: 1, prezzo: 1, descrizione: 1}, function(err, item) {
        if (err) throw err;
        res.render('women', {item: item});
    });
});

module.exports = router;