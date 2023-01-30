var express = require('express');
var router = express.Router();

/* GET pagina spedizioni. */
router.get('/shipping', function (req, res, next) {
    res.render('shipping');
});

module.exports = router;