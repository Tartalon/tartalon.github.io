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

check.addEventListener ('click', function(e) {

	e.preventDefault();
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
let result2 = document.querySelector('#title');
let check2 = document.querySelector('#submit-numb');

check2.addEventListener('click', function(e) {

	e.preventDefault();
		let num = +numField.value;

switch (num) {
	case 0:
		result2.textContent = "Спец символ этой кнопки: )";
		break;
	case 1:
		result2.textContent = "Спец символ этой кнопки: !";
		break;
	case 2:
		result2.textContent = "Спец символ этой кнопки: @";
		break;
	case 3:
		result2.textContent = "Спец символ этой кнопки: #";
		break;
	case 4:
		result2.textContent = "Спец символ этой кнопки: $";
		break;
	case 5:
		result2.textContent = "Спец символ этой кнопки: %";
		break;
	case 6:
		result2.textContent = "Спец символ этой кнопки: ^";
		break;
	case 7:
		result2.textContent = "Спец символ этой кнопки: &";
		break;
	case 8:
		result2.textContent = "Спец символ этой кнопки: *";
		break;
	case 9:
		result2.textContent = "Спец символ этой кнопки: (";
		break;
	default:
		result2.textContent = "Не верные символ!"
	break;
	}
	numField.value = "";
});




//========Third


let numbsFeald = document.querySelector('#i-numbs');
let check3 = document.querySelector('#submit-numbs');
let result3 = document.querySelector('#title');

check3.addEventListener('click', function(e) {
	e.preventDefault();
		let num = +numbsFeald.value;

	if (num.length > 3 || num.length < 3) {
		result3.textContent = 'Введите трех значное число';
	} else if (num[0] === num[2] || num[0] === num[1] || num[1] === num[2]) {
		result3.textContent = 'Есть одинаковые числа';
	}
	else {
		result3.textContent = 'Одинаковых чисел нет';
	}
});