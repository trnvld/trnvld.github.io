function menuOffset() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 10 && $(window).width() < 600) {
            $('.header').addClass('offset');
        } else {
            $('.header').removeClass('offset');
        }
    });
}

function slideDownArrow() {
    $('.homepage__intro-arrow').click(function() {
        $('html,body').animate({
                scrollTop: $(".homepage__who-we-are").offset().top - 100
            },
            'slow');
    });
}

// function langChange() {
//     $('.header__language').click(function() {
//         $('.lang-en').toggleClass('hidden');
//         $('.lang-ru').toggleClass('hidden');
//     });
// }

function fullscreenVideo() {
    $('.video-arrow').click(function() {
        event.preventDefault();
        $('.video-wrapper-bg, .video-wrapper').addClass('open');
        $('.vidoe-iframe').attr('src', $('.vidoe-iframe').data('src'));
    });
    $('.video-close, .video-wrapper-bg, .video-wrapper').click(function() {
        $('.video-wrapper-bg, .video-wrapper').removeClass('open');
        $('.vidoe-iframe').attr('src', $('.vidoe-iframe').data('src1'));
    });

    function modalClose(e) {
        if (e.keyCode === 27) {
            $('.video-wrapper-bg, .video-wrapper').removeClass('open');
        }
    }
    document.addEventListener('keydown', modalClose);
}

function loginClick() {
    var target = '.form-error-msg-wr-lg';
    $(target).css('visibility', 'hidden');
    $(target).removeClass('animated');
    $(target).removeClass('fadeInUp');
    setTimeout(function() {
        $(target).css('visibility', 'visible');
        $(target).addClass('animated fadeInUp');
        $('.login-btns #form-btn').css('border-color', '#FF4F1A')
    }, 1000);
};

function contactClick() {
    var errors = false;
    let input = {
        name: document.getElementById('form-name'),
        surname: document.getElementById('form-surname'),
        company: document.getElementById('form-comp'),
        email: document.getElementById('form-email'),
        phone: document.getElementById('form-phone'),
        country: document.getElementById('form-country'),
    };
    let regexp = {
        email: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
        phone: /^\d+$/
    };

    if (input.name.value === '') {
        $('#form-name-label').text('Please enter your first name');
        $('#form-name').css('border-bottom-color', '#FF4F1A');
        errors = true;
    } else {
        $('#form-name-label').text('Correct!');
        $('#form-name').css('border-bottom-color', '#a8df94');
    }

    if (input.surname.value === '') {
        $('#form-surname-label').text('Please enter your last name');
        $('#form-surname').css('border-bottom-color', '#FF4F1A');
        errors = true;
    } else {
        $('#form-surname-label').text('Correct!');
        $('#form-surname').css('border-bottom-color', '#a8df94');
    }

    if (input.company.value === '') {
        $('#form-comp-label').text('Please enter your company');
        $('#form-comp').css('border-bottom-color', '#FF4F1A');
        errors = true;
    } else {
        $('#form-comp-label').text('Correct!');
        $('#form-comp').css('border-bottom-color', '#a8df94');
    }

    if (input.email.value === '') {
        $('#form-email-label').text('Please enter your email');
        $('#form-email').css('border-bottom-color', '#FF4F1A');
        errors = true;
    } else if (!regexp.email.test(input.email.value)) {
        $('#form-email-label').text('Please enter correct email');
        $('#form-email').css('border-bottom-color', '#FF4F1A');
        errors = true;
    } else {
        $('#form-email-label').text('Correct!');
        $('#form-email').css('border-bottom-color', '#a8df94');
    }

    if (input.phone.value === '') {
        $('#form-phone-label').text('Please enter your phone');
        $('#form-phone').css('border-bottom-color', '#FF4F1A');
        errors = true;
    } else if (!regexp.phone.test(input.phone.value)) {
        $('#form-phone-label').text('Please enter correct phone (only nubmers)');
        $('#form-phone').css('border-bottom-color', '#FF4F1A');
        errors = true;
    } else {
        $('#form-phone-label').text('Correct!');
        $('#form-phone').css('border-bottom-color', '#a8df94');
    }
    if (input.country.value === '') {
        $('#form-country-label').text('Please enter your country');
        $('#form-country').css('border-bottom-color', '#FF4F1A');
        errors = true;
    } else {
        $('#form-country-label').text('Correct!');
        $('#form-country').css('border-bottom-color', '#a8df94');
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
        $.ajax({
            type: "POST",
            url: "php/handlers/ContactFormHandler.php",
            data: $('form').serialize(),
            success: function () {
                $('#contactModal .wrapper').css('display', 'none');
                $('#contactModal .modal-login-heading').css('display', 'none');
            }
        });
        $(target).css('visibility', 'visible');
        $(target).addClass('animated fadeInUp');
        $(target).delay(2500).fadeOut(function() {
            window.location.reload();
        });
    }
};

// form with file logic (CV - form)
function contactClickCV() {
    let form = document.getElementById('cv-form');
    let input = {
        name: document.getElementById('cv-form-name'),
        surname: document.getElementById('cv-form-surname'),
        email: document.getElementById('cv-form-email'),
        phone: document.getElementById('cv-form-phone'),
        type: document.getElementById('cv-vacancy-type'),
        file: document.getElementById('cv-file-connect'),
    };
    let regexp = {
        email: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
        phone: /^\d+$/
    }

    let formData = new FormData;
    let errors = false;
    let fileHint = document.querySelectorAll('label[for="cv-file-connect"]')[0];
    let fileSVG = {
        path: document.querySelectorAll('.vacancy__form-file-connect-icon svg path')[0],
        circle: document.querySelectorAll('.vacancy__form-file-connect-icon svg circle')[0],
    };

    if (input.name.value === '') {
        $('#cv-form-name-label').text('Please enter your first name');
        $('#cv-form-name').css('border-bottom-color', '#FF4F1A');
        errors = true;
    } else {
        $('#cv-form-name-label').text('Correct!');
        $('#cv-form-name').css('border-bottom-color', '#a8df94');
        formData.append('name', input.name.value);
    }

    if (input.surname.value === '') {
        $('#cv-form-surname-label').text('Please enter your last name');
        $('#cv-form-surname').css('border-bottom-color', '#FF4F1A');
        errors = true;
    } else {
        $('#cv-form-surname-label').text('Correct!');
        $('#cv-form-surname').css('border-bottom-color', '#a8df94');
        formData.append('surname', input.surname.value);
    }
    // email validation
    if (input.email.value === '') {
        $('#cv-form-email-label').text('Please enter your email');
        $('#cv-form-email').css('border-bottom-color', '#FF4F1A');
        errors = true;
    } else if (!regexp.email.test(input.email.value)) {
        $('#cv-form-email-label').text('Please enter correct email');
        $('#cv-form-email').css('border-bottom-color', '#FF4F1A');
        errors = true;
    } else {
        $('#cv-form-email-label').text('Correct!');
        $('#cv-form-email').css('border-bottom-color', '#a8df94');
        formData.append('email', input.email.value);
    }
    // phone validation
    if (input.phone.value === '') {
        $('#cv-form-phone-label').text('Please enter your phone');
        $('#cv-form-phone').css('border-bottom-color', '#FF4F1A');
        errors = true;
    } else if (!regexp.phone.test(input.phone.value)) {
        $('#cv-form-phone-label').text('Please enter correct phone (only nubmers)');
        $('#cv-form-phone').css('border-bottom-color', '#FF4F1A');
        errors = true;
    } else {
        $('#cv-form-phone-label').text('Correct!');
        $('#cv-form-phone').css('border-bottom-color', '#a8df94');
        formData.append('phone', input.phone.value);
    }


    if (input.type.textContent.length) {
        formData.append('type', input.type.textContent);
    }

    if (input.file.files.length === 0 ) {

        fileHint.innerHTML = 'Choose your CV,<br> plsease';
        fileHint.style.color = '#FF4F1A';
        fileSVG.path.style.fill = '#FF4F1A';
        fileSVG.circle.style.stroke = '#FF4F1A';
        errors = true;

    } else if (input.file.files[0].size / 1024 / 1024 > 4) {
        fileHint.innerHTML = 'Uploaded file is to large';
        fileHint.style.color = '#FF4F1A';
        fileSVG.path.style.fill = '#FF4F1A';
        fileSVG.circle.style.stroke = '#FF4F1A';
        errors = true;
    } else {
        formData.append('file', input.file.files[0]);
    }


    if (errors) {
        $('#cv-form-btn-contact').css('border-color', '#FF4F1A');
    }


    if (!errors) {

        $.ajax({
            type: "POST",
            url: "php/handlers/CVFormHandler.php",
            processData: false,
            contentType: false,
            data: formData,
            success: function (data) {

                fileSVG.path.style.fill = '#000';
                fileSVG.circle.style.stroke = '#000';
                fileHint.innerHTML = "Join our team,<br>send your CV to us";
                fileHint.style.color = '#000';
                for (let inputKey in input) {
                    input[inputKey].value = '';
                    $('#cv-form-'+inputKey+'-label').text(inputKey);
                    $('#cv-form-'+inputKey).css('border-bottom-color', '#000');
                }
                let thankNode = document.createElement("p");
                thankNode.classList.add('vacancy__form-agreement');
                thankNode.classList.add('vacancy__form-thankyou');
                thankNode.innerHTML = 'Thank you, your CV was sent successfully!';
                form.append(thankNode);
            }
        });
        let successMsg = document.getElementsByClassName('form-success-msg');
        let successMsgContent = document.getElementById('form-success-msg-content');
        $(successMsg).fadeIn();
        $(successMsgContent).addClass('fadeInUp animated');
        $('body').addClass('fade-in');
        $('.close-form-success-msg').click(function() {
            $('body').removeClass('fade-in');
            $(successMsg).fadeOut(function() {
                window.location.reload();
            });
        });
        $(successMsg).delay(1500).fadeOut('slow');
        $(successMsg).fadeOut(function() {
            window.location.reload();
        });
    }
}

function contactClickRu() {
    var errors = false;
    if (document.getElementById('form-name').value === '') {
        $('#form-name-label').text('Пожалуйста, введите полное имя');
        $('#form-name').css('border-bottom-color', '#FF4F1A');
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
        setTimeout(function() {
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

$(document)
    .mousemove(function(e) {
        $('.your-cursor4')
            .eq(0)
            .css({
                left: e.pageX,
                top: e.pageY
            });
        setTimeout(function() {
            $('.your-cursor4')
                .eq(1)
                .css({
                    left: e.pageX,
                    top: e.pageY
                });
        }, 100);
        setTimeout(function() {
            $('.your-cursor4')
                .eq(2)
                .css({
                    left: e.pageX,
                    top: e.pageY
                });
        }, 200);
    });
$(document).on("mousemove", function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
});

// file upload state changing
function fileUploadState() {
    let fileSVG = {
        path: document.querySelectorAll('.vacancy__form-file-connect-icon svg path')[0],
        circle: document.querySelectorAll('.vacancy__form-file-connect-icon svg circle')[0],
    };
    let fileInput = document.getElementById('cv-file-connect');
    let fileHint = document.querySelectorAll('label[for="cv-file-connect"]')[0];
    if (fileInput) {
        fileInput.addEventListener('change', function () {
            fileSVG.path.style.fill = '#a8df94';
            fileSVG.circle.style.stroke = '#a8df94';
            fileHint.innerHTML = fileInput.files[0].name;
            fileHint.style.color = '#a8df94';
        });
    }
}

function subscribeForm() {
    let submitButton = document.querySelectorAll('.footer-subscribe-form-btn')[0];
    let subscribeForm = document.querySelectorAll('form.footer-subscribe-form')[0];
    let subscribeInput = subscribeForm.childNodes[1];
    let regexp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let errors = false;
    let thankNode = document.createElement("p");
    thankNode.classList.add('footer-subscribe-thankyou');

    submitButton.addEventListener('click', function (e) {
        e.preventDefault();
        if (subscribeInput.value === '') {
            thankNode.innerHTML = 'Please enter your email';
            thankNode.classList.add('footer-subscribe-wrong');
            subscribeForm.append(thankNode);
            errors = true;
        } else if (!regexp.test(subscribeInput.value)) {
            thankNode.innerHTML = 'Please enter correct email';
            thankNode.classList.add('footer-subscribe-wrong');
            subscribeForm.append(thankNode);
            errors = true;
        } else {
            thankNode.classList.remove('footer-subscribe-wrong');
            thankNode.innerHTML = '';
            errors = false;
        }

        if (!errors) {
            $.ajax({
                type: "POST",
                url: "php/handlers/SubscribeHandler.php",
                data: $('form.footer-subscribe-form').serialize(),
                success: function () {
                    thankNode.innerHTML = 'Thanks for subscribing!';
                    subscribeForm.append(thankNode);
                    subscribeInput.value = '';
                }
            });
        }

    });
}

$(document).ready(function() {
    $("#login-modal-link").animatedModal({
        color: 'rgb(6,6,6)',
        modalTarget: 'loginModal',
        animatedIn: 'fadeIn',
        animatedOut: 'fadeOut',
        animationDuration: '1.5s'
    });
    $("#login-modal-link2").animatedModal({
        color: 'rgb(6,6,6)',
        modalTarget: 'loginModal',
        animatedIn: 'fadeIn',
        animatedOut: 'fadeOut',
        animationDuration: '1.5s'
    });
    $("#login-modal-link3").animatedModal({
        color: 'rgb(6,6,6)',
        modalTarget: 'loginModal',
        animatedIn: 'fadeIn',
        animatedOut: 'fadeOut',
        animationDuration: '1.5s'
    });

    if ($("#form-name").length) {
        $("#form-name").attr("name", "name");
        $("#form-surname").attr("name", "surname");
        $("#form-comp").attr("name", "company");
        $("#form-email").attr("name", "email");
        $("#form-phone").attr("name", "phone");
        $("#form-country").attr("name", "country");

        $("#form-name").attr("maxlength", "50");
        $("#form-surname").attr("maxlength", "50");
        $("#form-comp").attr("maxlength", "50");
        $("#form-email").attr("maxlength", "50");
        $("#form-phone").attr("maxlength", "50");
        $("#form-country").attr("maxlength", "50");

        $("#form-btn-contact").attr("type", "button");
    }

    $(".contact-modal-link").animatedModal({
        color: 'rgb(6,6,6)',
        modalTarget: 'contactModal',
        animatedIn: 'fadeIn',
        animatedOut: 'fadeOut',
        animationDuration: '1.5s'
    });

    menuOffset();
    slideDownArrow();
    // langChange();
    fullscreenVideo();
    fileUploadState();
    subscribeForm();
});
