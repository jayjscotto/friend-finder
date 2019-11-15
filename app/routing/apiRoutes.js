//express and path modules
const express = require('express'),
      friends = require('../data/friends');
      app = express();


app.get('/api/friends', function (request, response) {
    response.json(friends);
})

app.post('/api/friends', function (request, response) {
    console.log(request.body);
    //initialize the newFriend object
    let newUser = request.body;
    //push the friend object to the list
    friends.push(newUser);
    
    //TODO: add logic to pick friends
})

module.exports = app;
