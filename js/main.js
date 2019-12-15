$(document).ready(function () {

    $("#button").click(function () {
    $("#hello").removeClass('hello').addClass('button');
    });

    $("#button").click(function () {
        $("#goodbye").removeClass('button');
    });
    
    setTimeout(function () {
    $('#hello').addClass('h1');
    }, 3000);
    
    });