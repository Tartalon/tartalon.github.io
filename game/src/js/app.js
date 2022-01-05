const langInputWrapper = document.querySelector('.lang__input-wrapper');
const langInput = document.querySelector('.lang__input');
const langList = document.querySelector('.lang__list');

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
