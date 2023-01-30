var express = require('express');
var router = express.Router();

/* GET pagina dettagli ordine. */
router.get('/order', function (req, res, next) {
    res.render('order');
});

module.exports = router;