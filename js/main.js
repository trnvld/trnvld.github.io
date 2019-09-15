$(document).ready(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() > 10) {
            $('.header').addClass('offset');
        } else {
            $('.header').removeClass('offset');
        }
    });

   $(".homepage__intro-arrow").click(function() {
    $('html,body').animate({
        scrollTop: $(".homepage__who-we-are").offset().top - 100},
        'slow');
});
});