
// @author: Madison Kalivoda 
// NYT REACT APP 

// Dependencies 
var express = require('express');
var router = express.Router();

// Import Article Model 
var Article = require('../models/Article.js');

// Main GET to display the ReactJS Application
router.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/public/index.html');
});

// API GET --> the components will use this to query MongoDB for all SAVED articles

router.get('/api/saved', function (req, res) {

    Article.find({}, function (err, docs) {

        if (err) {
            console.log(err);
        }
        else {
            res.json(docs);
        }
    });

});







// Export Router to Server.js
module.exports = router;