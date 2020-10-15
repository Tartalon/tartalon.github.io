"use strict";

const genreList = document.querySelector(".genre__list");
const genreItem = document.querySelectorAll(".genre__item");

// Buttons=============
const prevButton = document.querySelector(".trends__genre-prev");
const nextButton = document.querySelector(".trends__genre-next");

prevButton.addEventListener("click", () => {});

// SWIPER==============
var swiper = new Swiper(".swiper-container", {
  slidesPerView: "auto",
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});
