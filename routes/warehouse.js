var express = require('express');
var router = express.Router();
var createError = require('http-errors');
var Item = require('../schemas/Item');

// codice per inserire nel db
// const word = new Item({
//     titolo: "inserito da codice"
// })

// word.save().then(word => {console.log(word)})

/* GET pagina magazzino. */
router.get('/warehouse', (req, res) => {

    Item.find({}, function(err, item) {
        // console.log(item)
        res.render('warehouse', {
            product: item
        })   
    })
})

module.exports = router;