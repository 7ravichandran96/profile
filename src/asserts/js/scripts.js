$(document).ready(function () {
    $('#menu').click(function () {
        $(this).toggleClass('fa fa-times')
        $('header').toggleClass('toggle')
    });
    $(window).on('screen load', function () {
        $("#menu").removeClass('fa fa-times')
        $('header').removeClass('toggle')
    });




});

