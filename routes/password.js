var express = require('express');
var router = express.Router();

/* GET pagina password dimenticata. */
router.get('/password', function (req, res, next) {
    res.render('forgotPassword');
});

module.exports = router;