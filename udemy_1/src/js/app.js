// console.log(2019, 1.5);
// console.log(20 * 'klkjksj');
// console.log(1/0);

// console.log('frt');

// console.table({ name: 'Volodka', age: '45'});

const num = parseFloat(Math.PI.toFixed(2));
console.log(num);

const numMin = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
console.log(numMin);
const numMax = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
console.log(numMax);

const numRandom = +Math.random().toFixed(2);
console.log(numRandom);
let x = 12;
let numRandomOne = +(Math.random() * x);
console.log(numRandomOne);

let numPlus = +(0.6 + 0.7).toFixed(1);
console.log(numPlus);

let num$ = "100$";
console.log(parseFloat(num$));