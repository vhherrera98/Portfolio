$(document).ready(function () {
    $('a.scroll-home').on('click', function () {
        var seccionOffsetTop = $($(this).attr('href')).offset().top
        $('html, body').stop().animate({ scrollTop: seccionOffsetTop }, 1000);
    })
    $('a.scroll-services').on('click', function () {
        var seccionOffsetTop = $($(this).attr('href')).offset().top
        $('html, body').stop().animate({ scrollTop: seccionOffsetTop }, 1000);
    })
    $('a.scroll-skills').on('click', function () {
        var seccionOffsetTop = $($(this).attr('href')).offset().top - 50
        $('html, body').stop().animate({ scrollTop: seccionOffsetTop }, 1000);
    })
    $('a.scroll-about').on('click', function () {
        var seccionOffsetTop = $($(this).attr('href')).offset().top
        $('html, body').stop().animate({ scrollTop: seccionOffsetTop }, 1000);
    })
    $('a.scroll-contact').on('click', function () {
        var seccionOffsetTop = $($(this).attr('href')).offset().top
        $('html, body').stop().animate({ scrollTop: seccionOffsetTop }, 1000);
    })
    $('.click-arriba').on('click', function () {
        if ($(window).scrollTop() != 0) {
            $('html, body').stop().animate({ scrollTop: 0 }, 1000);
        }
    })

})