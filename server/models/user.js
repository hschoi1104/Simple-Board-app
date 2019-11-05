var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    permissionLevel: String
    },
    {
    versionKey: false
});

module.exports = mongoose.model('user', userSchema);