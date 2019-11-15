//express and path modules
const express = require('express'),
      path = require('path'),
      app = express();

app.get('/', function (request, response) {
    response.sendFile(path.join(__dirname, '../../index.html'))
})

app.get('/survey', function (request, response) {
    response.sendFile(path.join(__dirname, '../../survey.html'))
})

module.exports = app;