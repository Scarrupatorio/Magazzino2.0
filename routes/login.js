var express = require('express');
var router = express.Router();
var Log = require('../schemas/Login');

/* GET login. */
router.get('/', function (req, res, next) {
    res.render('login',{text: ''});
});

router.post('/index', function(req, res) {
    Log.findOne({},{username: 1, password: 1}, function(err,credential){
        console.log(credential.username + credential.password);
        if (credential.username == req.body.user){
            if(credential.password == req.body.pass){
                console.log("logged");
                res.render('index');
            }else {res.render('login',{text: "credenziali errate"});}
        }else{res.render('login',{text: "credenziali errate"});}
    })
})

module.exports = router;