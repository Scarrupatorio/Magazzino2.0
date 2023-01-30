var express = require('express');
var router = express.Router();

/* GET registra nuovo account. */
router.get('/account', function (req, res, next) {
    res.render('createAccount');
});

module.exports = router;