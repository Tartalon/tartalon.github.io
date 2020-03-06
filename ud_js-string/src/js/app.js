const firstName = 'Vladymyr';
const lastName = 'Solodovnik';
let age = 35;
let str = 'Hellow my name is Vladymyr';

let value;

value = lastName.length;
value = firstName[3];
value = lastName[lastName.length - 1];

value = firstName.toUpperCase();

value = firstName.indexOf('m');  //Возвращает первую букву 'm'.
value = firstName.lastIndexOf('y'); //Возвращает последнюю букву 'y'.

value = str.indexOf('y', 10); //Начать поск с индекса 10.
value = str.indexOf('name');
value = str.includes('is'); //Возвращает булевое значение (есть или нету).

value = str.slice(0, 5); //Вырезаем с индекса '0' по '5' не включая последний.
value = str.slice(0, -5); //выризаем с начала и до конца минус 5 символов.


value = str.replace('Vladymyr', 'Vovka'); //Замена слова или буквы...


console.log(value);


// Шаблонные строки
// ES5

let strTwo;
strTwo = 'Hello mi name is ' + firstName + ' ' + lastName;

strTwo = '<ul>' +
      '<li>First name: ' + firstName + '</li>' +
      '<li>Last name: ' + lastName + '</li>' +
      '<li>Age: ' + age + '</li>' +
      '</ul>';

// console.log(strTwo);

// ES6
strTwo = `
  <ul>
    <li>First name: ${firstName}</li>
    <li>Last name: ${lastName}</li>
    <li>Age: ${age}</li>
    <li>Math.random: ${Math.random()}</li>
  </ul>
`;

document.body.innerHTML = strTwo;