'use strict';

$(function() {
    //フェードイン
    $(window).scroll(function() {
        const windowHeight = $(window).height();
        const scroll = $(window).scrollTop();

        $('.fadeIn').each(function() {
            const targetPosition = $(this).offset().top;
            if(scroll > targetPosition - windowHeight + 150) {
                $(this).addClass("scrollIn");
            }
        });
    });

    //ページ内遷移
    $('.link a[href*="#"]').click(function() {
        const hash = $(this).attr('href');
        const targetPosition = $(hash).offset().top;
        $('body, html').animate({scrollTop: targetPosition}, 400);
        return false;
    });

    //回転
    document.querySelector('.toTopText').animate(
        [
            { transform: 'rotate(360deg)'},
            { transform: 'rotate(0deg)'}
        ],
        {
            duration: 9000,
            easing: 'linear',
            iterations: Infinity
        }
    );
});