var express = require('express');
var router = express.Router();
var createError = require('http-errors');
var Item = require('../schemas/Item');
var Titles = require('../schemas/TitoliTableM');
var Ship = require('../schemas/TableS');

/* GET pagina magazzino. */
router.get('/warehouse', (req, res, next) => {
    Titles.find({}, {_id: 1, nome: 1}, function(err, title) {
        if (err) throw err;
        Item.find({},{_id: 1, nome: 1, prezzo: 1, quantità: 1, codice: 1, disponibilità: 1}, function(err, item) {
            if (err) throw err;
            res.render('warehouse', {title: title, item: item});
        });
    });
});

router.post('/delete', function(req, res) {
    console.log(req.body.q);
    Item.findOne({}, {nome: req.body.q, quantità: 1}, function(err, trovato) {
        console.log(trovato.nome + trovato.quantità);
        if (err) throw err;
        const ship = new Ship({
            nome: trovato.nome, 
            quantità: trovato.quantità, 
            stato_ordine: "In Magazzino",
        });
        console.log(trovato.nome + trovato.quantità);
        Item.deleteOne({nome: req.body.q}, function(error) {
            if (error) throw error;
            ship.save().then(results => {
                if (error) throw error;
                res.redirect('warehouse');
            });
        });
    });  
});

module.exports = router;