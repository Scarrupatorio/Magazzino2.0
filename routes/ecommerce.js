var express = require('express');
var router = express.Router();

/* GET pagina home ecommerce. */
router.get('/ecommerce', function (req, res, next) {
    res.render('ecommerce');
});

module.exports = router;