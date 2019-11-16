//import friends data file
import { friends } from ('../data/friends');

$('#submit').click(function (e) {
    e.preventDefault();
    e.stopPropagation();

    let userName = $('#userName').val().trim(),
    userImage = $('#userPhoto').val().trim(),
    q1 = $('#question1').val(),
    q2 = $('#question2').val(),
    q3 = $('#question3').val(),
    q4 = $('#question4').val(),
    q5 = $('#question5').val(),
    q6 = $('#question6').val(),
    q7 = $('#question7').val(),
    q8 = $('#question8').val(),
    q9 = $('#question9').val(),
    q10 = $('#question10').val();

    let answers = [];
    answers.push(q1,q2,q3,q4,q5,q6,q7,q8,q9,q10);

    let newUser = {
        "name": userName, 
        "image": userImage, 
        "answers": answers
    };

    $.post('/api/friends', newUser).then(function(data) {
        console.log(data)
    })

    return matchUser(newUser, friends);

});

//matching function
function matchUser(user, array) {
    //current users total survey score
    userScore = user.answers;

    //array for friend scores
    let friendScores = [];

    //iterate over the friends array to get each score
    for (let i = 0; i < array.length; i++) {
        //sum each user's scores and push to the friendScores array
        let score = array[i].score.reduce((a,b) => a + b);
        friendScores.push(score);
    }

    let match = friendScores.reduce((previous, current) => Math.abs(current - userScore) < Math.abs(previous - userScore) ? current : previous);

    let userMatch = friends[match];

    console.log(userMatch);

}