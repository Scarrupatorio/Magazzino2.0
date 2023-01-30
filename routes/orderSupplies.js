var express = require('express');
var router = express.Router();

/* GET pagina ordini. */
router.get('/orders', function (req, res, next) {
    res.render('ordersupplies');
});

module.exports = router;