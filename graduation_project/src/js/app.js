$('.img-box__carousel').slick({
	autoplay: true,
	arrows: false,
	fade: true,
	speed: 2000,
	autoplaySpeed: 2000
});

$('.description__img--box').slick({
	autoplay: true,
	arrows: false,
	fade: true,
	speed: 2000,
	autoplaySpeed: 2000
});


// MENU=======
document.querySelector('.header__nav--toggle').addEventListener('click', function toggle() {
	document.querySelector('.nav__list').classList.toggle('nav__active');
	document.querySelector('.header__nav--toggle').classList.toggle('toggle__active');
});


// btnTop=======
$(document).ready(function(){

$(window).scroll(function(){
if ($(this).scrollTop() > 100) {
$('.scrollup').fadeIn();
} else {
$('.scrollup').fadeOut();
}
});

$('.scrollup').click(function(){
$("html, body").animate({ scrollTop: 0 }, 600);
return false;
});

});