var express = require('express');
var app = express();
var exports = module.exports = {};

app.get('/', function(req, res) {
    res.send('Hello World');
});

var server = app.listen(4000, function() {
    console.log('Hi, Server is up with port 4000');
});

exports.closeServer = function() {
    server.close();
};