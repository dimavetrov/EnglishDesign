$(document).ready(function(){

    $('.navbar-toggle').on('click',function(){
        $('#main-nav').toggleClass('open');

    });


    new WOW().init();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.nav-block').addClass('navbar-fixed-top');
        } else {
            $('.nav-block').removeClass('navbar-fixed-top');
        }

    });



    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {

            $('.up').fadeIn();
        } else {
            $('.up').fadeOut();
        }
    });



    $('.up').click(function(){
        $('body').animate({
            scrollTop: 0
        },1000);
        return false;
    });
if( $(window).width >800) {
    var topBlockHeight = $('.cathedra-block').height() + $('.nav-block').height();
    var wind = $(window).height();
    $('.auth-block').height(wind - topBlockHeight - '50');
}

    $('.owl-dot').on('click',function(){
        $('.owl-dot',this).toggleClass('active');
    });


    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav:false,
        dots:true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                loop: false,
                margin: 20
            },
            600: {
                items: 2,
                loop: false,
                margin: 20
            },
            1300: {
                items: 3,
                loop: false,
                margin: 20
            }

        }
    });


$('.teachers').owlCarousel({
    loop: true,
    margin: 10,
    nav:false,
    dots:true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            margin: 20
        },
        600: {
            items: 2,
            margin: 20
        },
        1300: {
            items: 4,
            margin: 20
        }

    }
});
});