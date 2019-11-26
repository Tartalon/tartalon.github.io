const name = prompt ("Waht is your name?");
alert ("hello" + " " + name);

const year = 2019;
let birthday = prompt ("year of your birth?");
alert ("you are" + " " + (year - birthday) + " " + "years old");

let lenght = prompt ("what is the length of the side of the square?");
const perimetr = (4 * lenght);
alert ("perimetr of the square is" + " " + perimetr);

let radius = prompt ("what radius?");
const area = ((radius * radius) * Math.PI);
alert ("circle area is" + " " + area);

let distance = prompt ("what is the distance between cities in km?");
let time = prompt ("how long would you like to get? (in hour)");
let speed = distance / time;
alert ("you must move at a speed of" + " " + speed + " " + "km/hr");

let dollar = prompt ("enter the dollar amount");
const euro = dollar * 0.91;
alert ("it's" + " " + euro + " " + "euros");

let flash = prompt ("specify the amount of flash drive in GB");
const quantity = (flash / 820 * 1024);
alert ("you can upload" + " " + (Math.floor(quantity)) + " " + "files");

let money = prompt ("amount of money in the wallet");
let choco = prompt ("the price of chocolate");
alert ("you can buy" + " " + (Math.floor(money / choco)) + " " + "chocolates." + " " + "Your surrender is" + " " + (money % choco)+ "grn");

let number = prompt ("enter a number");
let result = 0;
while (number) {
    result *= 10;
    result += number % 10;
    number = Math.floor(number / 10);
}
alert (result);

let contribution = prompt ("your contribution");
alert ("deposit payments for 2 months is"  + " " + (contribution * 0.05 / 12 * 2));