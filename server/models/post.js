var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
    title: String,
    author: String,
    posted_date: { type: Date, default: Date.now  },
    content: String
    },
    {
    versionKey: false
});

module.exports = mongoose.model('post', postSchema);