$(document).ready(function () {
  $('.tr-header__slider').slick({
    autoplay: true,
    infinite: true,
    speed: 1500,
    fade: true,
    cssEase: 'linear'
  });
});



// BTNTOP ==========
$(document).ready(function () {

  $(window).scroll(function () {
    if ($(this).scrollTop() > 150) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });

  $('.scrollup').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 600);
      return false;
  });
});



// NAV======
$(document).ready(function() {
  $('.tr-header__nav--toggle, .nav__link').click(function(event) {
    $('.tr-header__nav--toggle').toggleClass('toggle__active');
    $('.nav__list').toggleClass('nav__active');
  });
});