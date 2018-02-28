//Step 1
//Defining global variants, functions, objects

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

});
