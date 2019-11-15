//express and path modules
const express = require('express'),
      path = require('path'),
      friends = require('../data/friends');
      app = express();


app.get('/api/friends', function (request, response) {
    response.json(friends);
})

app.post('/api/friends', function (request, response) {
    //initialize the newFriend object
    //push the friend object to the list


})

module.exports = app;