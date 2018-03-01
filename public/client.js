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

    $("#loginForm").submit(function (e) {
        e.preventDefault();
        let username = $("#GET-username").val();
        let password = $("#GET-password").val();
        let userInfo = {
            username,
            password
        };
        let settings = {
            url: "/auth/login",
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(userInfo),
            success: function (data) {
                console.log('successfully logged in');
                localStorage.setItem("authToken", data.authToken);
                localStorage.setItem("currentUser", username);
                user = username;
                $("#login-page").hide();
                $("#register-page").hide();
                $(".login-section").hide();
                $(".detail-section").hide();
                $(".home").show();
                $(".logout").show();
                $(".gardenDetails").show();
                console.log(data);
                //                getGarden(data);
                //                getJournal(data);
            },
            error: function (err) {
                console.log(err);
            }
        };
        $.ajax(settings);
    })


});
