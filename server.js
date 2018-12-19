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
var fs = require('fs');
var app = express();

// Routes
app.get('/', function (req, res) {
  // res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('./index.html');
  // var now = new Date();
  // res.send('Hello World! Today is ' + now.getFullYear() + "." + ( now.getMonth() + 1 ) + "." + now.getDate());
});

app.get('/chinese', function (req, res) {
    fs.readFile('./index.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
});

// Create the server
app.listen(iPortNum, function () {
  console.log('Example app listening on port ' + this.address().port);
});
