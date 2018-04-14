
// @author: Madison Kalivoda 
// NYT REACT APP 

// Dependencies 
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var PORT = process.env.PORT || 3000;

// Initialize Express 
var app = express();
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
    extended: false
}));

// Serve Static Content 
app.use(express.static(process.cwd() + '/public'));


// --- Database Configuration with Mongoose 

// Connect to localhost if not a production environment
if (process.env.NODE_ENV == 'production') {
    mongoose.connect();
}
else {
    mongoose.connect('mongodb://localhost/nytreact');
}

var db = mongoose.connection;

db.on('error', function (err) {
    console.log('Mongoose Error: ' + err);
});
db.once('open', function () {
    console.log('Mongoose connection to DB successful');
});

// Import the Article Model
var Article = require('./models/Article.js');
// ---------------------------------------------------------------

// Import Router 
var router = require('./controllers/controller.js');
app.use('/', router);


// Launch App 
app.listen(PORT, function () {
    console.log('App is listening on PORT: ' + PORT);
});