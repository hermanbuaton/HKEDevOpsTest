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
var http = require('http');
var exreq = require('request');
var app = express();

// Routes
app.get('/', function (req, res) {

    var result = "";
    
    exreq('http://104.215.251.59:41299/api/func2/?param=dec20', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.writeHead(200, {'Content-Type': 'text/html','Content-Length': body.length});
            res.write(body);
            res.end();
        }
    });
    
    // fs.readFile('./index.html',function (err, data){
    //     res.writeHead(200, {'Content-Type': 'text/html','Content-Length': result.length});
    //     res.write(result);
    //     res.end();
    // });
    
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
