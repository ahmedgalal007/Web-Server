var express = require('express');
var middleware = require('./middleware.js')

var app = express();
var PORT = 4000;

app.use(middleware.logger);

app.get('/', function (req, res , next) {
	res.send('Hello Express!');
});

app.get('/about', middleware.requireAuthentication, function (req, res, next) {
	res.end('<h1> About US. </h1>');
});

app.use(express.static(__dirname + "/public"));

app.listen(PORT, function () {
	console.log('Express Server Started on Port ' + PORT + '!');
});
