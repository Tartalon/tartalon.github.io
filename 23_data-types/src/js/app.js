// let age = prompt ("How old are you?");
// let message = (age<=11) ? "Baby": //ребенок
// 	(age<=17) ? "Teenager": //подросток
// 	(age<=59) ? "Adult": //взрослый
// 	(age>=60) ? "Retiree":
// "You entered the wrong age";
// alert (message);



// let num = prompt ("Enter a number from 0 to 9");
// switch (+num) {
// 	case 0:
// 		alert (")");
// 		break;
// 	case 1:
// 		alert ("!");
// 		break;
// 	case 2:
// 		alert ("@");
// 		break;
// 	case 3:
// 		alert ("#");
// 		break;
// 	case 4:
// 		alert ("$");
// 		break;
// 	case 5:
// 		alert ("%");
// 		break;
// 	case 6:
// 		alert ("^");
// 		break;
// 	case 7:
// 		alert ("&");
// 		break;
// 	case 8:
// 		alert ("*");
// 		break;
// 	case 9:
// 		alert ("(");
// 		break;
// 	default:
// 		alert ("Wrong number!");
// }

// First

let age = document.querySelector('#i-age');
let check = document.querySelector('#submit-age');
let result = document.querySelector('#title');

function test() {

	if ((age <= 11) & (age > 0) & (age < 120)) {
		result.textContent = 'Вы ребенок';
	} else if (age <= 17) {
		result.textContent = 'Вы подросток';
	} else if (age <= 59) {
		result.textContent ='Вы взрослый';
	} else if (age >= 60) {
		result.textContent = 'Вы пенсионер';
	} else {
		result.textContent = 'Вы, наверное, вели не верное число';
	}
}

check.addEventListener('click', test);