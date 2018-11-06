'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var requestify = require('requestify');

var PORT = process.env.PORT || 3000;
var REQUIRED = process.env.REQUIRED || true;

var BASE_URL = 'https://api.getbeamer.com/v0';
var API_OPTIONS = {
    headers: {
        accept: 'application/json',
        'beamer-api-key': process.env.BEAMER_API_KEY
    },
    params: {'published': REQUIRED},
};

var app = express();


app.use(function (req, res, next) {

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(bodyParser.urlencoded({extended: true}));

app.get('/posts', function (req, res) {

    var URL = BASE_URL + '/posts';

    requestify
        .get(URL, API_OPTIONS)
        .then(function (result) {

            res.json(result.getBody());
        })
        .catch(function (err) {

            res.json(err);
        })
});

app.listen(PORT, function () {

    console.log('Proxy to beamer is listening on port %s.', PORT);
});
