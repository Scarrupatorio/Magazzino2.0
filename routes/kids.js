var express = require('express');
var router = express.Router();

/* GET pagina password dimenticata. */
router.get('/kids', function (req, res, next) {
    res.render('kids');
});

module.exports = router;