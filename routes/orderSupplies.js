var express = require('express');
var router = express.Router();
var TableO = require('../schemas/TableO');
var TitlesO = require('../schemas/TitoliTableOrder');
var Cont = require('../schemas/cont');

/* GET pagina ordini. */
router.get('/orders', function (req, res, next) {
    TitlesO.find({}, {nome: 1}, function(err, title) {
        if (err) throw err;
        TableO.find({},{numero_ordine: 1, nome_ordine: 1, numero_prodotti: 1, prezzo: 1}, function(err, item) {
            if (err) throw err;
            res.render('ordersupplies', {title: title, item: item});
        });
    });
});

router.post('/add', function(req, res) {
    if (req.body.nom != '' && req.body.num != ''){
        Cont.findOne({},{i: 1}, function(err, i) {
            console.log(i.i);
            var inc = i.i + 1;
            Cont.updateOne({_id: "63dd367928e9fe37668c62a5"}, {i: inc}, function(err) {
                const order = new TableO ({
                    numero_ordine: inc,
                    nome_ordine: req.body.nom,
                    numero_prodotti: req.body.num,
                    prezzo: Math.round(Math.random() * 2 * req.body.num),
                });
                order.save().then(results => {
                    res.redirect('orders');
                });
            });
        });
    } else {
        console.log("i campi sono obbligatori");
        res.redirect('orders');
    }
});

module.exports = router;