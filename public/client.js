//Step 1
//Defining global variants, functions, objects
let activeUserEmail = "";
let activeUserId = "";

function showItem(activeUserEmail) {
    $.ajax({
            type: "GET",
            url: '/item/' + activeUserEmail,
            dataType: 'json',
        })
        .done(function (dataOutput) {
            //displays the external api json object in the console
            displayItemResult(dataOutput.item, activeUserEmail);
        })
        .fail(function (jqXHR, error, errorThrown) {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });
}



function deleteItem(itemId) {
    console.log(itemId);
    $.ajax({
            method: 'DELETE',
            dataType: 'json',
            contentType: 'application/json',
            url: '/delete-item/' + itemId,
        })
        .done(function (result) {
            showItem(activeUserEmail);
        })
        .fail(function (jqXHR, error, errorThrown) {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });
}


function showMyDashboard() {
    backToLandingPageToggle = true;
    $('.login').hide();
    $('#landing-page').hide();
    $('.images').hide();
    $('.login').hide();
    $('.signup').hide();
    $('#my-dashboard').show();
    $('.new-item').hide();
}

//Step 2
//Using global variants, functions, objects (trigers)
$('document').ready(function () {

    $('#landing-page').show();
    //    $('.images').show();
    $('.login').hide();
    $('.signup').hide();
    $('#my-dashboard').hide();
    $('.new-item').hide();



    $("#login-button").click(function () {

        $('.login').hide();
        $('#landing-page').hide();
        $('.images').hide();
        $('.login').show();
        $('.signup').hide();
        $('#my-dashboard').hide();
        $('.new-item').hide();

    })

    $("#register-button").click(function () {
        $('.login').hide();
        $('#landing-page').hide();
        $('.images').hide();
        $('.login').hide();
        $('.signup').show();
        $('#my-dashboard').hide();
        $('.new-item').hide();


    })

    $("#register").on('click', function (event) {
        //if the page refreshes when you submit the form use "preventDefault()" to force JavaScript to handle the form submission
        event.preventDefault();
        //get the value from the input box
        const form = document.body.querySelector('#registerForm');
        if (form.checkValidity && !form.checkValidity()) {
            return;
        }
        const fname = $('input[name="firstName"]').val();
        const lname = $('input[name="lastName"]').val();
        const uname = $('input[name="username"]').val();
        const pw = $('input[name="password"]').val();
        const confirmPw = $('input[name="confirm-password"]').val();
        console.log(fname, lname, uname, pw, confirmPw);
        if (pw !== confirmPw) {
            event.preventDefault();
            alert('Passwords must match!');
        } else {
            event.preventDefault();
            const newUserObject = {
                username: uname,
                password: pw
            };
            // will assign a value to variable 'user' in signin step below
            // AJAX call to send form data up to server/DB and create new user
            $.ajax({
                    type: 'POST',
                    url: 'https://not-just-luck.herokuapp.com/users/create',
                    dataType: 'json',
                    data: JSON.stringify(newUserObject),
                    contentType: 'application/json'
                })
                .done(function (result) {
                    event.preventDefault();
                    newUserToggle = true;
                    alert('Thanks for signing up! You may now sign in with your username and password.');
                    showMyDashboard();
                })
                .fail(function (jqXHR, error, errorThrown) {
                    console.log(jqXHR);
                    console.log(error);
                    console.log(errorThrown);
                });
        };
    });



});
