var express = require('express');
var router = express.Router();
var Item = require('../schemas/Item');
var TitlesO = require('../schemas/TitoliTableOrder');

/* GET pagina ordini. */
router.get('/orders', function (req, res, next) {
    TitlesO.find({}, {nome: 1}, function(err, title) {
        if (err) throw err;
        Item.find({},{nome: 1, prezzo: 1, quantità: 1}, function(err, item) {
            if (err) throw err;
            res.render('ordersupplies', {title: title, item: item});
        });
    });
});

module.exports = router;