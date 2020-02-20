// let age = prompt ("How old are you?");
// let message = (age<=11) ? "Baby": //ребенок
// 	(age<=17) ? "Teenager": //подросток
// 	(age<=59) ? "Adult": //взрослый
// 	(age>=60) ? "Retiree":
// "You entered the wrong age";
// alert (message);



//=====First



let ageField = document.querySelector('#i-age');
let check = document.querySelector('#submit-age');
let result = document.querySelector('#title');

check.addEventListener ('click', function() {

	// e.preventDefault();
		let age = +ageField.value;

   if (age <= 11 && age > 0) {
    	result.textContent = 'Вы ребенок';
   } else if (age <= 17) {
    	result.textContent = 'Вы подросток';
   } else if (age <= 59) {
    	result.textContent = 'Вы взрослый';
   } else if (age >= 60 && age < 120) {
   		result.textContent = 'Вы пенсионер';
   } else {
    	result.textContent = 'Вы, наверное, ввели не верное число';
   }
 });



//=====Second


let numField = document.querySelector('#i-numb');
let check2 = document.querySelector('#submit-numb');

check2.addEventListener('click', function() {

	// e.preventDefault();
		let num = +numField.value;

switch (num) {
	case 0:
		result.textContent = "Спец символ этой кнопки: )";
		break;
	case 1:
		result.textContent = "Спец символ этой кнопки: !";
		break;
	case 2:
		result.textContent = "Спец символ этой кнопки: @";
		break;
	case 3:
		result.textContent = "Спец символ этой кнопки: #";
		break;
	case 4:
		result.textContent = "Спец символ этой кнопки: $";
		break;
	case 5:
		result.textContent = "Спец символ этой кнопки: %";
		break;
	case 6:
		result.textContent = "Спец символ этой кнопки: ^";
		break;
	case 7:
		result.textContent = "Спец символ этой кнопки: &";
		break;
	case 8:
		result.textContent = "Спец символ этой кнопки: *";
		break;
	case 9:
		result.textContent = "Спец символ этой кнопки: (";
		break;
	default:
		result.textContent = "Не верные символ!"
	break;
	}
	numField.value = "";
});




//========Third


let numbsFeald = document.querySelector('#i-numbs');
let check3 = document.querySelector('#submit-numbs');

check3.addEventListener('click', function() {
	// e.preventDefault();
		let num = numbsFeald.value;

	if (num.length > 3 || num.length < 3) {
		result.textContent = 'Введите трех значное число';
	} else if (num[0] === num[2] || num[0] === num[1] || num[1] === num[2]) {
		result.textContent = 'Есть одинаковые числа';
	}
	else {
		result.textContent = 'Одинаковых чисел нет';
	}
});




// =============Fifth


let yearFeald = document.querySelector('#i-year');
let check4 = document.querySelector('#submit-year');

check4.addEventListener('click', () => {
	let year = +yearFeald.value;
	if (year % 400 == 0 || year % 4 == 0 && year % 100 !== 0) {
		result.textContent = 'Год высокосный';
	}
	else {
		result.textContent = 'Год Не высокосный';
	}
});




// ============6


let palindromFeald = document.querySelector('#i-palindrom');
let check5 = document.querySelector('#submit-palindrom');

check5.addEventListener('click', () => {
	let palindrom = palindromFeald.value;
	let reverse = palindrom.split('').reverse().join('');

	if (palindrom == reverse && palindrom.length == 5) {
		result.textContent = 'Число палиндром';
	} else if(palindrom != reverse && palindrom.length == 5){
		result.textContent = 'Число не палиндром';
	}
	else {
		result.textContent = 'Вы ввели не верное число';
	}
});






//  ============= 7


let moneyFeald = document.querySelector('#i-money');
let convertEur = document.querySelector('#submit-eur');
let convertUan = document.querySelector('#submit-uan');
let convertAzn = document.querySelector('#submit-azn');

convertEur.addEventListener('click', function() {
  let eur = moneyFeald.value * 0.93;

  result.textContent = eur + ' EUR';
});

convertUan.addEventListener('click', function() {
  let uan = moneyFeald.value * 24.50;

  result.textContent = uan + ' UAN';
});

convertAzn.addEventListener('click', function() {
  let azn = moneyFeald.value * 1.7;

  result.textContent = azn + ' AZN';
});




//  ============= 8


let summFeald = document.querySelector('#i-money');
let calculated = document.querySelector('#submit-money');

calculated.addEventListener('click', function() {
	let discount = summFeald.value;

	if (discount < 200) {
		result.textCcontent = discount;
	} else if (discount >= 200 && discount < 300) {
		result.textContent = discount - (discount * 3 / 100);
	} else if (discount >=300 && discount < 500) {
		result.textContent = discount - (discount * 5 / 100);
	}
});