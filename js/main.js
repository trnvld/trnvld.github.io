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
    $(".menu").on("click",".menu-link", function (event) {
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

function fullscreenVideo() {
    $('.video-arrow').click(function () {
        event.preventDefault();
        $('.video-wrapper-bg, .video-wrapper').addClass('open');
    });
    $('.video-close, .video-wrapper-bg, .video-wrapper').click(function () {
        $('.video-wrapper-bg, .video-wrapper').removeClass('open');
    });

    function modalClose ( e ) {
        if ( e.keyCode === 27 ) {
            $('.video-wrapper-bg, .video-wrapper').removeClass('open');
        }
    }
    document.addEventListener('keydown', modalClose);
}



function contactClick() {
    var errors = false;
    if (document.getElementById('form-name').value === '') {
        $('#form-name-label').text('Please enter your full name');
        $('#form-name').css('border-bottom-color', '#FF4F1A');
        // $('#form-name').css('color', '#FF4F1A');
        errors = true;
    }
    if (document.getElementById('form-comp').value === '') {
        $('#form-comp-label').text('Please enter your company');
        $('#form-comp').css('border-bottom-color', '#FF4F1A');
        errors = true;
    }
    if (document.getElementById('form-email').value === '') {
        $('#form-email-label').text('Please enter your email');
        $('#form-email').css('border-bottom-color', '#FF4F1A');
        errors = true;
    }
    if (document.getElementById('form-phone').value === '') {
        $('#form-phone-label').text('Please enter your phone');
        $('#form-phone').css('border-bottom-color', '#FF4F1A');
        errors = true;
    }
    if (document.getElementById('form-country').value === '') {
        $('#form-country-label').text('Please enter your country');
        $('#form-country').css('border-bottom-color', '#FF4F1A');
        errors = true;
    }
    if (errors) {
        $('#form-btn-contact').css('border-color', '#FF4F1A');
    }
    if (!errors) {
        $('#contactModal .wrapper').addClass('animated fadeOut');
        $('#contactModal .modal-login-heading').addClass('animated fadeOut');

        var target = '.form-contact-msg';
        $(target).css('visibility', 'hidden');
        $('#form-btn-contact').css('display', 'none');
        $(target).removeClass('animated');
        $(target).removeClass('fadeInUp');
        setTimeout(function () {
            $('#contactModal .wrapper').css('display', 'none');
            $('#contactModal .modal-login-heading').css('display', 'none');
            $(target).css('visibility', 'visible');
            $(target).addClass('animated fadeInUp');

            $.ajax({
                type: "POST",
                url: "/mail.php",
                data: $('form').serialize()
            });
        }, 1500);
    }
};

function contactClickRu() {
    var errors = false;
    if (document.getElementById('form-name').value === '') {
        $('#form-name-label').text('Пожалуйста, введите полное имя');
        $('#form-name').css('border-bottom-color', '#FF4F1A');
        // $('#form-name').css('color', '#FF4F1A');
        errors = true;
    }
    if (document.getElementById('form-comp').value === '') {
        $('#form-comp-label').text('Пожалуйста, введите компанию');
        $('#form-comp').css('border-bottom-color', '#FF4F1A');
        errors = true;
    }
    if (document.getElementById('form-email').value === '') {
        $('#form-email-label').text('Пожалуйста, введите email');
        $('#form-email').css('border-bottom-color', '#FF4F1A');
        errors = true;
    }
    if (document.getElementById('form-phone').value === '') {
        $('#form-phone-label').text('Пожалуйста, введите телефон');
        $('#form-phone').css('border-bottom-color', '#FF4F1A');
        errors = true;
    }
    if (document.getElementById('form-country').value === '') {
        $('#form-country-label').text('Пожалуйста, введите страну');
        $('#form-country').css('border-bottom-color', '#FF4F1A');
        errors = true;
    }
    if (errors) {
        $('#form-btn-contact').css('border-color', '#FF4F1A');
    }
    if (!errors) {
        $('#contactModal .wrapper').addClass('animated fadeOut');
        $('#contactModal .modal-login-heading').addClass('animated fadeOut');

        var target = '.form-contact-msg';
        $(target).css('visibility', 'hidden');
        $('#form-btn-contact').css('display', 'none');
        $(target).removeClass('animated');
        $(target).removeClass('fadeInUp');
        setTimeout(function () {
            $('#contactModal .wrapper').css('display', 'none');
            $('#contactModal .modal-login-heading').css('display', 'none');
            $(target).css('visibility', 'visible');
            $(target).addClass('animated fadeInUp');

            $.ajax({
                type: "POST",
                url: "/mail.php",
                data: $('form').serialize()
            });
        }, 1500);
    }
};



$(document).ready(function () {
    $(".contact-modal-link").animatedModal({
        color: 'rgb(6,6,6)',
        modalTarget: 'contactModal',
        animatedIn: 'fadeIn',
        animatedOut: 'fadeOut',
        animationDuration: '1.5s'
    });

    menuOffset();
    slideDownArrow();
    langChange();
    anchorNav();
    menuItemHighlight();
    fullscreenVideo();
});
