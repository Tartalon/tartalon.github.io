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

check.addEventListener('click', function(e) {

	e.preventDefault();
 	let age = +ageField.value;

	if (age <= 11 && age > 0) {
		result.textContent = 'Вы ребенок';
	} else if (age <= 17) {
		result.textContent = 'Вы подросток';
	} else if (age <= 59) {
		result.textContent ='Вы взрослый';
	} else if (age >= 60 && age < 120) {
		result.textContent = 'Вы пенсионер';
	} else {
		result.textContent = 'Вы, наверное, вели не верное число';
	}
});



//=====Second

let num = document.querySelector('#i-numb');
let result2 = document.querySelector('#title');

num.addEventListener('click')
switch (+num) {
	case 0:
		alert (")");
		break;
	case 1:
		alert ("!");
		break;
	case 2:
		alert ("@");
		break;
	case 3:
		alert ("#");
		break;
	case 4:
		alert ("$");
		break;
	case 5:
		alert ("%");
		break;
	case 6:
		alert ("^");
		break;
	case 7:
		alert ("&");
		break;
	case 8:
		alert ("*");
		break;
	case 9:
		alert ("(");
		break;
	default:
		alert ("Wrong number!");
}

// let age = +ageField.value;

// let test = (age <= 11) ? "Вы ребенок":
// 	(age <= 17) ? "Вы подросток":
// 	(age <= 59) ? "Вы взрослый":
// 	(age > 59 && age < 120) ? "Вы пенсионер":
// 	"Вы ввели неверный возраст";

// check.addEventListener('click', test);
// console.log(test);

// result.textContent = test;
