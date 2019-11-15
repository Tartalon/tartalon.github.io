
document.querySelector('.burger__icon').addEventListener('click', function () {
  document.querySelector('.header__menu-wrapper').style.display = 'block';
});
document.querySelector('.burger__close').addEventListener('click', function () {
  document.querySelector('.header__menu-wrapper').style.display = 'none';
});

document.querySelector('.cookie__btn').addEventListener('click', function () {
  document.querySelector('.header__cookie').style.display = 'none';
})

document.querySelectorAll('.contact').addEventListener('click', function () {
  document.querySelector('.form__wrapper').style.display = 'block';
})

document.querySelector('.close-modal').addEventListener('click', function () {
  document.querySelector('.form__wrapper').style.display = 'none';
})

document.querySelector('.menu__link').addEventListener('click', function () {
  document.querySelector('.header__menu-wrapper').style.display = 'none';
})