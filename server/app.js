// serverjs

// [LOAD PACKAGES]
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
// [ CONFIGURE mongoose ]

// CONNECT TO MONGODB SERVER
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function() {
    // CONNECTED TO MONGODB SERVER
    console.log("Connected to mongod server");
});

mongoose.connect('mongodb://localhost:27017/board-restful-app');

// [Access-Control-Allow-Origin(CORS)]
app.use(cors());

// DEFINE MODEL
var Post = require('./models/post');
var User = require('./models/user');

// [CONFIGURE APP TO USE bodyParser]
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// [CONFIGURE SERVER PORT]
var port = process.env.PORT || 8080;

// [CONFIGURE ROUTER]
//var router = require('./routes')(app, Post);

// [CONFIGURE APIs]
router = require('./api/post')(app, Post);
router = require('./api/user')(app, User);

// [RUN SERVER]
var server = app.listen(port, function() {
    console.log("Express server has started on port " + port)
});