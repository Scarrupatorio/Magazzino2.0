var express = require('express');
var router = express.Router();

/* GET registra nuovo account. */
router.get('/contact', function (req, res, next) {
    res.render('contact');
});

module.exports = router;