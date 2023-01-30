var express = require('express');
var router = express.Router();

/* GET pagina password dimenticata. */
router.get('/men', function (req, res, next) {
    res.render('men');
});

module.exports = router;