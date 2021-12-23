const arr = [2, 4, 6, 3, 2];

let max = Math.max.apply(null, arr);
let min = Math.min.apply(null, arr);

console.log(max, min);
