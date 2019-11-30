let age = prompt ("How old are you?");
let message = (age<=11) ? "Baby": //ребенок
	(age<=17) ? "Teenager": //подросток
	(age<=59) ? "Adult": //взрослый
	(age>=60) ? "Retiree":
"You entered the wrong age";
alert (message);



let num = prompt ("Enter a number from 0 to 9");
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



