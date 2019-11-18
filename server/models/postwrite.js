var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postwrSchema = new Schema({
    title: String,
    author: String,
    contents: String,
});

module.exports = mongoose.model('posttable', postwrSchema);