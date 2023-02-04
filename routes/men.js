var express = require('express');
var router = express.Router();
var Men = require('../schemas/Men');

/* GET pagina password dimenticata. */
router.get('/men', function (req, res, next) {
    Men.find({}, {nome: 1, prezzo: 1, descrizione: 1}, function(err, item) {
        if (err) throw err;
        res.render('men', {item: item});
    });
});

module.exports = router;