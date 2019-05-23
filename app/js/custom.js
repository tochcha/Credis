$(window).on('load', function() {
    $('body').removeClass('loaded');
});

$(function() {
    /* placeholder*/
    $('input, textarea').each(function() {
        var placeholder = $(this).attr('placeholder');
        $(this).focus(function() {
            $(this).attr('placeholder', '');
        });
        $(this).focusout(function() {
            $(this).attr('placeholder', placeholder);
        });
    });
    /* placeholder*/

    $('.button-nav').click(function() {
        $(this).toggleClass('active'),
            $('.main-nav-list').slideToggle();
        return false;
    });

    /* components */

    /* 
    	FormStyler описание тут http://dimox.name/jquery-form-styler/ https://dimox.github.io/jQueryFormStyler/demo/ 
    	плагин работает для всего, только стили  надо задавать (для селекта и инпут намбер их, например не видно)
    */
    if ($('.styled').length) {
        $('.styled').styler();
    };

    /*
    if($('.scroll').length) {
    	$(".scroll").mCustomScrollbar({
    		axis:"x",
    		theme:"dark-thin",
    		autoExpandScrollbar:true,
    		advanced:{autoExpandHorizontalScroll:true}
    	});
    };
	
    */

    /* components */

});


// меняем стрелку на гамбургер при клике на область контента
/*$(".hamburger").click(function() {
	$(this).toggleClass('is-active');
	$('nav.top_nav, .uni-overlay').toggleClass('active');
});
$(".uni-overlay").click(function() {
	$('nav.top_nav, .uni-overlay').removeClass('active');
	$('.hamburger').removeClass('is-active');
});*/



// плавная прокрутка вниз к якорю
/*$(".header nav ul li a").click(function () {
	var elementClick = $(this).attr("href")
	var destination = $(elementClick).offset().top;
	jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
	return false;
});*/


// тень от меню при прокрутке страницы больше чем 355px (можно делать липкий хедер)
/*$(window).scroll(function () {
	if ($(this).scrollTop() > 355) {
		$('.sticky-holder').addClass('fixed');
	} else {
		$('.sticky-holder').removeClass('fixed');
	}
	if ($(this).scrollTop() > 255) {
		$('.sticky-holder').addClass('fup');
	} else {
		$('.sticky-holder').removeClass('fup');
	}
});*/

/* tabs*/
$('.tabs li a').click(function () {
	$(this).parents('.tab-wrap').find('.tab-cont').addClass('hide-tab');
	$(this).parent().siblings().removeClass('active');
	var id = $(this).attr('href');
	$(id).removeClass('hide-tab');
	$(this).parent().addClass('active');
    if ( $(".nav_tab_1").hasClass("active") ) {
        $('.nav-tab-list').removeClass('act_2');
        $('.nav-tab-list').removeClass('act_3');
        $('.nav-tab-list').addClass('act_1');
    }
    if ( $(".nav_tab_2").hasClass("active") ) {
        $('.nav-tab-list').removeClass('act_3');
        $('.nav-tab-list').removeClass('act_1');
        $('.nav-tab-list').addClass('act_2');
    }
    if ( $(".nav_tab_3").hasClass("active") ) {
        $('.nav-tab-list').removeClass('act_2');
        $('.nav-tab-list').removeClass('act_1');
        $('.nav-tab-list').addClass('act_3');
    }
	return false;
});
/* tabs*/

// Если нужно при адаптации вырезать блок и вставит в другое место 
if ($(window).width() < 600) {
	$('#tab_1').detach().insertAfter($('.nav_tab_1 a'));
    $('#tab_2').detach().insertAfter($('.nav_tab_2 a'));
    $('#tab_3').detach().insertAfter($('.nav_tab_3 a'));
}


// слайдер (настройки тут http://kenwheeler.github.io/slick/)
if ($('.reviews_slider').length) {
    $('.reviews_slider').slick({
        dots: false,
        infinite: true,
        arrows: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<div class="revarrow slick-prev"></div>',
        nextArrow: '<div class="revarrow slick-next"></div>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
};