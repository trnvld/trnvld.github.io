$(document).ready(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() > 10) {
            $('.header').addClass('offset');
        } else {
            $('.header').removeClass('offset');
        }
    });
});