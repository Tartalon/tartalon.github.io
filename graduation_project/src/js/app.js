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
$(document).ready(function() {
	$('.header__nav--toggle, .nav__link').click(function(event) {
		$('.header__nav--toggle').toggleClass('toggle__active');
		$('.nav__list').toggleClass('nav__active');
	});
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



// MODAL=========

$(document).ready(function() {

let modalCall = $("[data-modal]");
let modalClose = $("[data-close]");

modalCall.on("click", function(event) {
	event.preventDefault();

	let $this = $(this);
	let modalId = $this.data('modal');

	$(modalId).addClass('show');
	$("body").addClass('no-scroll');
});

modalClose.on("click", function(event) {
	event.preventDefault();

	let $this = $(this);
	let modalParent = $this.parents('.modal');

	modalParent.removeClass('show');
	$("body").removeClass('no-scroll');
});
});