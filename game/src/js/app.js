const langInputWrapper = document.querySelector('.lang__input-wrapper');
const langInput = document.querySelector('.lang__input');
const langList = document.querySelector('.lang__list');
const burger = document.querySelector('.header__burger');
const navWrapper = document.querySelector('.nav__wrapper');

langInputWrapper.addEventListener('click', e => {
	langList.classList.toggle('show');
});

langList.addEventListener('click', e => {
	if (e.target.classList.contains('lang__link')) {
		let selectedLang = langInput.value;
		langInput.value = e.target.textContent;
		e.target.textContent = selectedLang;

		langList.classList.remove('show');
	}
});

burger.addEventListener('click', e => {
	if (!e.target.classList.contains('burger-active')) {
		burger.classList.add('burger-active');
		navWrapper.style.right = '-15px';
	} else {
		burger.classList.remove('burger-active');
		navWrapper.style.right = '';
		console.log(234);
	}
});
