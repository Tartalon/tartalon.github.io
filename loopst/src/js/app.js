"use strict";

const navList = document.querySelector('.nav__list'),
  navBurger = document.querySelector('.nav__burger'),
  logo = document.querySelector('.logo');


// Opening & closing menu by clicking on the burger
navBurger.addEventListener('click', function (e) {
  e.preventDefault();
  navBurger.classList.toggle('burger-active');
  navList.classList.toggle('nav-list-active');
});

// Closing menu by click on the menu item
navList.addEventListener('click', function (e) {
  if (e.target.classList.contains('nav__link')) {
    navList.classList.remove('nav-list-active');
    navBurger.classList.remove('burger-active');
  }
});

// Closing menu by click on the logo
logo.addEventListener('click', () => {
  navBurger.classList.remove('burger-active');
  navList.classList.remove('nav-list-active');
})
