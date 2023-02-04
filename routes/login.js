var express = require('express');
var router = express.Router();
var Log = require('../schemas/Login');

/* GET login. */
router.get('/login', function (req, res, next) {
    res.render('login');
});

router.post('/auth', function(req, res) {
    Log.findOne({},{username: 1, password: 1}, function(err,credential){
        console.log(credential.username + credential.password);
        if (credential.username == req.body.user){
            if(credential.password == req.body.pass){
                console.log("logged");
                res.render('');
            }else {res.render('login');}
        }else{res.render('login');}
    })
})

module.exports = router;