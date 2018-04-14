// @author: Madison Kalivoda 
// NYT REACT APP 

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// Construct the Article Schema 
var ArticleSchema = new Schema({

    // Title of Article
    title: {
        type: String,
        required: true
    },
    // Date of Article
    date: {
        type: String,
        required: true
    },
    // Link to Article
    url: {
        type: String,
        required: true
    }

});

// Create the Article Model with Mongoose
var Article = mongoose.model('Article', ArticleSchema);

// Export the Model
module.exports = Article;