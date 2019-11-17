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

    //current users total survey score
    let userScore = request.body.answers;

    //array for friend scores
    let friendScores = [];

    //iterate over the friends array to get each score
    for (let i = 0; i < friends.length; i++) {
        //sum each user"s scores and push to the friendScores array
        let score = friends[i].answers.reduce((a,b) => a + b);
        friendScores.push(score);
    }

    //compute the match by comparing the user"s score to each of the other logged user"s scores 
    //and returning the closest score
    let match = friendScores.reduce((previous, current) => Math.abs(current - userScore) < Math.abs(previous - userScore) ? current : previous);
    console.log(match);

    let userMatchIndex = friendScores.indexOf(match);
    let matchObject = friends[userMatchIndex];
    console.log(matchObject);

    //TODO: add logic to pick friends
    response.json(matchObject)

    //push the friend object to the list
    friends.push(newUser);
})

module.exports = app;
