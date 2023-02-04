var express = require('express');
var router = express.Router();
var Sales = require('../schemas/Sales');

/* GET pagina password dimenticata. */
router.get('/sales', function (req, res, next) {
    Sales.find({}, {nome: 1, prezzo: 1, descrizione: 1}, function(err, item) {
        if (err) throw err;
        res.render('sales', {item: item});
    });
});

module.exports = router;