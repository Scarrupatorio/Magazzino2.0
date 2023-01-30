var express = require('express');
var router = express.Router();

/* GET pagina password dimenticata. */
router.get('/women', function (req, res, next) {
    res.render('women');
});

module.exports = router;