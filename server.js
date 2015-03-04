'use strict';

var fs = require('fs');
var express  = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
var config = require('./config');

var app = express();

if(env === 'development') {
    console.log('Dev Mode:');
    var liveReload = require('connect-livereload');
    app.use(liveReload({port: 33777}));
}

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());


app.get('*', function(req, res) {
    res.sendfile('./public/index.html');
});

if(!module.parent) {
    app = app.listen(config.port);
    console.log('App listening on port 8080');
}
