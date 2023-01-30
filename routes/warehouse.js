var express = require('express');
var router = express.Router();
var createError = require('http-errors');
var Item = require('../schemas/Item');
var Titles = require('../schemas/TitoliTableM');

// codice per inserire nel db
// const word = new Item({
//     titolo: "inserito da codice"
// })

// word.save().then(word => {console.log(word)})

/* GET pagina magazzino. */
router.get('/warehouse', (req, res, next) => {
    Titles.find({}, {nome: 1}, function(err, title) {
        if (err) throw err;
        Item.find({},{nome: 1, prezzo: 1, quantità: 1, codice: 1, disponibilità: 1}, function(err, item) {
            if (err) throw err;
            res.render('warehouse', {title: title, item: item});
        });
    });
});

module.exports = router;