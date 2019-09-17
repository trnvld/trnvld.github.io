$(document).ready(function () {
    function menuOffset() {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 10) {
                $('.header').addClass('offset');
            } else {
                $('.header').removeClass('offset');
            }
        });
    }

    function slideDownArrow() {
        $('.homepage__intro-arrow').click(function () {
        $('html,body').animate({
                scrollTop: $(".homepage__who-we-are").offset().top - 100
            },
            'slow');
        });
    }
  
    function langChange() {
        $('.header__language').click(function () {
            $('.lang-en').toggleClass('hidden');
            $('.lang-ru').toggleClass('hidden');
        });
    }

    function anchorNav() {
        $(".menu").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top - 86;
            $('body,html').animate({scrollTop: top}, 1500);
        });
    }

    function menuItemHighlight() {
        $('.menu li a').click(function () {
            if ($('.menu li a').hasClass('selected')) {
                $('.menu li a').not(this).removeClass('selected')
                if ($(this).hasClass('link1')) {
                    $('.link1').addClass('selected')
                } else if ($(this).hasClass('link2')) {
                    $('.link2').addClass('selected')
                } else if ($(this).hasClass('link3')) {
                    $('.link3').addClass('selected')
                } else if ($(this).hasClass('link4')) {
                    $('.link4').addClass('selected')
                } else if ($(this).hasClass('link5')) {
                    $('.link5').addClass('selected')
                } else if ($(this).hasClass('link6')) {
                    $('.link6').addClass('selected')
                }
            } 
        });
    }

    menuOffset();
    slideDownArrow();
    langChange();
    anchorNav();
    menuItemHighlight();
});
