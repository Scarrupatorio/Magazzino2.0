var express = require('express');
var router = express.Router();

/* GET registra nuovo account. */
router.get('/aboutus', function (req, res, next) {
    res.render('aboutUs');
});

module.exports = router;