var express = require('express');
var router = express.Router();

/* GET registra nuovo account. */
router.get('/profilo', function (req, res, next) {
    res.render('profile');
});

module.exports = router;