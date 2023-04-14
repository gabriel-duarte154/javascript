//Podemos usar destructureing em array tambem

let a = 10;
let b = 7;

[a, b] = [b, a];

console.log(a);
console.log(b);

//simplesmente invertemos os valores

let myNums = [4, 8, 5, 6];
let [fisrt, second] = myNums;
console.log(fisrt, second);

//As vezes queremos guardar o os outrso números 

let alphabelt = ["a", "b", "c", "d", "e", "f", "g"];
let [,, ...rest] = alphabelt;

console.log(rest);

console.log(alphabelt.slice(2, ))

