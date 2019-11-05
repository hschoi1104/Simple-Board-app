const express = require('express');
const router = express.Router();

require('./post')(app,router)
require('./user')(app,router)


module.exports = router