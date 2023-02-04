var express = require('express');
var router = express.Router();
var Kids = require('../schemas/Kids');


/* GET pagina password dimenticata. */
router.get('/kids', function (req, res, next) {
    Kids.find({}, {nome: 1, prezzo: 1, descrizione: 1}, function(err, item) {
        if (err) throw err;
        res.render('kids', {item: item});
    });
});

module.exports = router;