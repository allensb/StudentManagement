'use strict';

var fs = require('fs');
var express  = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var path = require('path');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
var config = require('./config');

var app = express();

app.use(express.static(path.join(__dirname, '/dist')));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());


app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '/dist/index.html'));
});

if(!module.parent) {
    app = app.listen(config.port);
    console.log('App listening on port 8080');
}
