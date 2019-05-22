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
/*$('.tabs li a').click(function () {
	$(this).parents('.tab-wrap').find('.tab-cont').addClass('hide-tab');
	$(this).parent().siblings().removeClass('active');
	var id = $(this).attr('href');
	$(id).removeClass('hide-tab');
	$(this).parent().addClass('active');
	return false;
});*/
/* tabs*/

// Если нужно при адаптации вырезать блок и вставит в другое место 
/*if ($(window).width() < 768) {
	$('.crop-block').detach().insertAfter($('.after-block'));
}*/
