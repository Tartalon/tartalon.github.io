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




// PRELOADER=========
// let images = document.images,
// 	images_total_count = images.length,
// 	images_loaded_count = 0,
// 	preloader = document.getElementById('page-preloader'),
// 	perc_display = document.getElementById('load_perc');

// for( let i = 0; i < images_total_count; i++ ) {
// 	image_clone = new Image();
// 	image_clone.onload = image_loaded;
// 	image_clone.onerror = image_loaded;
// 	image_clone.src = images[i].src;
// }

// function image_loaded() {
// 	images_loaded_count++;

// 	perc_display.innerHTML = (( (100 / images_total_count) * images_loaded_count ) << 0) + '%';

// 	if( images_loaded_count >= images_total_count ){
// 		setTimeout(function() {
// 			let preloader = document.getElementById('page-preloader');
// 			if( !preloader.classList.contains('done') ){
// 				preloader.classList.add('done');
// 			}
// 		}, 1000);
// 	}
// }

window.addEventListener('load', function () {
	setTimeout(function () {
		let preloader = document.querySelector('.preloader');
		if(!preloader.classList.contains('done')) {
			preloader.classList.add('done');
		}
	}, 2000);
})