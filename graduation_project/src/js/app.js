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


  // infinite: true,
  // speed: 500,
  // fade: true,
  // cssEase: 'linear'