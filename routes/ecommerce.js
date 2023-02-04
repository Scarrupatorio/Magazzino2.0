var express = require('express');
var router = express.Router();
var Prod = require('../schemas/TableEcommerce');


/* GET pagina home ecommerce. */
router.get('/ecommerce', function (req, res, next) {
    Prod.find({}, {nome: 1, prezzo: 1, descrizione: 1}, function(err, item) {
        if (err) throw err;
        res.render('ecommerce', {item: item});
    });
});

module.exports = router;