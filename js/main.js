$(document).ready(function () {

    $("#button").click(function () {
    $("#hello").removeClass('hello').addClass('button');
    });
    
    setTimeout(function () {
    $('#hello').addClass('h1');
    }, 3000);
    
    });