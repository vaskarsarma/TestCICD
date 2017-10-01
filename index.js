var express = require('express');
var app = express();
var exports = module.exports = {};

app.get('/', function(req, res) {
    res.send('Hello World , This is Vaskar Sarma with first app to test CI-CD using jenkins.');
});

var server = app.listen(4000, function() {
    console.log("Hello Vaskar,");
    console.log('Server is up and running with port 4000');
});

exports.closeServer = function() {
    server.close();
};