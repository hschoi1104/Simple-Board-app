// LOAD PACKAGES
var express = require('express');
var app = express();
//var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors')

//CONFIGURE APP TO USE bodyParse
//app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

app.use(cors())

// CONFIGURE SERVER PORT
var port = process.env.PORT || 8000;
//CONTIGURE ROUTER
var router = require('./routes')(app);
//RUN SERVER
var server = app.listen(port, function() {
    console.log("Express server has started on port " + port)
});

// CONNECT TO MONGODB SERVER
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function() {
    //CONNECTED TO MONGODB SERVER
    console.log("Connected to mongod server");
});

mongoose.connect('mongodb://localhost/mongodb_tutorial');