//import friends data file
//ERR: cannot use import outside of a module
// import { friends } from ("../data/friends");

$(document).ready(function () {
    const questions = ["hello", "hello world", "question 3"];

    for (let i = 0; i < questions.length; i++) {
        const div = $("<div>").attr("class", "form-group")
        const h3 = $("<h3>");
        h3.text(questions[i]);
        const label = $("<label>").attr("for", `question${i}`);
        label.text("1-5");
        const select = $("<select>").attr("class", "form-control");
        select.attr("id", `question${i}`);

        $("#survey-form").append(div, h3, label, select);

        for (let j = 0; j < 5; j++) {
            const option = $("<option>").text(j);
            select.append(option);
        }
    }

})

//survey submit
$("#submit").click(function (e) {
    e.preventDefault();
    e.stopPropagation();

    //assigning values to user input fields
    let userName = $("#userName").val().trim(),
    userImage = $("#userPhoto").val().trim(),
    q1 = $("#question1").val(),
    q2 = $("#question2").val(),
    q3 = $("#question3").val(),
    q4 = $("#question4").val(),
    q5 = $("#question5").val(),
    q6 = $("#question6").val(),
    q7 = $("#question7").val(),
    q8 = $("#question8").val(),
    q9 = $("#question9").val(),
    q10 = $("#question10").val(),
    answers = [];

    answers.push(q1,q2,q3,q4,q5,q6,q7,q8,q9,q10);

    let newUser = {
        "name": userName, 
        "image": userImage, 
        "answers": answers
    };

    $.post("/api/friends", newUser).then(function(data) {
        console.log(data)
    })

    return matchUser(newUser, friends);

});

//matching function
function matchUser(user, array) {

    //current users total survey score
    let userScore = user.answers;

    //array for friend scores
    let friendScores = [];

    //iterate over the friends array to get each score
    for (let i = 0; i < array.length; i++) {
        //sum each user"s scores and push to the friendScores array
        let score = array[i].score.reduce((a,b) => a + b);
        friendScores.push(score);
    }

    //compute the match by comparing the user"s score to each of the other logged user"s scores 
    //and returning the closest score
    let match = friendScores.reduce((previous, current) => Math.abs(current - userScore) < Math.abs(previous - userScore) ? current : previous);

    let userMatch = array[match];

    console.log(userMatch);

}