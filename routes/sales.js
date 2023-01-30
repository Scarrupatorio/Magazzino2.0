var express = require('express');
var router = express.Router();

/* GET pagina password dimenticata. */
router.get('/sales', function (req, res, next) {
    res.render('sales');
});

module.exports = router;