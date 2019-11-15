$('#submit').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    let userName = $('#userName').val().trim();
    let userImage = $('#userPhoto').val().trim();
    let q1 = $('#question1').val()
    let q2 = $('#question2').val()
    let q3 = $('#question3').val()
    let q4 = $('#question4').val()
    let q5 = $('#question5').val()
    let q6 = $('#question6').val()
    let q7 = $('#question7').val()
    let q8 = $('#question8').val()
    let q9 = $('#question9').val()
    let q10 = $('#question10').val()

    let answers = [];
    answers.push(q1,q2,q3,q4,q5,q6,q7,q8,q9,q10);

    let newUser = {
        "name": userName, 
        "image": userImage, 
        "answers": answers
    };

    $.post('api/friends', newUser)
})