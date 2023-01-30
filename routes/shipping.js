var express = require('express');
var router = express.Router();
var createError = require('http-errors');
var Ship = require('../schemas/TableS');
var TitlesS = require('../schemas/TitleTableShipping');


/* GET pagina spedizioni. */
router.get('/shipping', function (req, res, next) {
    TitlesS.find({}, {_id: 1, nome: 1}, function(err, title) {
        if (err) throw err;
        Ship.find({},{_id: 1, nome: 1, quantità: 1, stato_ordine: 1}, function(err, item) {
            if (err) throw err;
            res.render('shipping', {title: title, item: item});
        });
    });
});

module.exports = router;