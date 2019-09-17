$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 10) {
            $('.header').addClass('offset');
        } else {
            $('.header').removeClass('offset');
        }
    });

    $(".homepage__intro-arrow").click(function () {
        $('html,body').animate({
                scrollTop: $(".homepage__who-we-are").offset().top - 100
            },
            'slow');
    });

    $('.header__language').click(function () {
        $('.lang-en').toggleClass('hidden');
        $('.lang-ru').toggleClass('hidden');
    });



            $(".header__menu").on("click","a", function (event) {
                event.preventDefault();
                var id  = $(this).attr('href'),
                    top = $(id).offset().top - 86;
                $('body,html').animate({scrollTop: top}, 1500);
            });

});
