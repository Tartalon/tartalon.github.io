
document.querySelector('.burger__icon').addEventListener('click', function () {
  document.querySelector('.header__menu-wrapper').style.display = 'block';
});
document.querySelector('.burger__close').addEventListener('click', function () {
  document.querySelector('.header__menu-wrapper').style.display = 'none';
});

document.querySelector('.cookie__btn').addEventListener('click', function () {
  document.querySelector('.header__cookie').style.display='none';
})