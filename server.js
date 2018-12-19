// ############################################################################
// File Name: server.js
// Description:
//  Simple node.js application using express listening to port 80
// Author: Peter Leung (pleungms@hotmail.com)
// Modification history
//  Author         Date       Description
//  -------------- ---------- -------------------------------------------------
//  Peter Leung    21/08/2018 Initial version
//
// ############################################################################
// Note that port 80 will throw a "Error: listen EACCES 0.0.0.0:80" excemption
// on your local machine, for testing use another port such as 3000

var iPortNum = 41085;

var express = require('express');
var app = express();

// Routes
app.get('/', function (req, res) {
  var now = new Date();
  res.send('Hello World! Today is ' + now.getFullYear() + "." + ( now.getMonth() + 1 ) + "." + now.getDate());
});

// Create the server
app.listen(iPortNum, function () {
  console.log('Example app listening on port ' + this.address().port);
});
