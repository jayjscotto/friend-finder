
$(document).ready(function () {
    const questions = [
        "Your mind is always active with ideas and plans.", 
        "You rely more on your experience than your imagination.", 
        "You find it easy to stay relaxed and focused.", 
        "You rarely move forward with an idea just because of your curiosity.", 
        "Other people don't usually upset you.", 
        "You don't like difficult conversations.",  
        "The truth is more important than someone else's feelings.",
        "Rush Hour 3 is the best movie ever made.",
        "Disney+ is the new best streaming service.",
        "Tom Brady is the best quarterback of all time."
    ];

    for (let i = 0; i < questions.length; i++) {
        const div = $("<div>").attr("class", "form-group")
        const h4 = $("<h4>");
        h4.text(questions[i]);
        const label = $("<label>").attr("for", `question${i}`);
        label.text("Choose 1 (Strongly Disagree) - 5 (Strongly Agree)");
        const select = $("<select>").attr("class", "form-control col-3");
        select.attr("id", `question${i}`);

        $("#survey-form").append(div, h4, label, select);

        for (let j = 1; j < 6; j++) {
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

    $.post("/api/friends", newUser).then(function(response) {
        console.log(response)
        $("#modal-content").empty();
        ///then get response and fill modal
        let modalHeader = $("<h2>").text(`Your Match:`)
        let matchName = $("<h4>").text(response.name).attr("class", "text-center mx-auto my-3");
        let matchPhoto = $("<img>").attr("src", response.photo);
        matchPhoto.attr("class","mx-auto my-3")
        $("#modal-content").append(modalHeader, matchName, matchPhoto);
        $(".match-modal").modal("show")   
    })

});