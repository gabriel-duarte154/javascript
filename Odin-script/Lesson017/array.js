//Array methods
/*
*1 toString() 
*2 join() 
*3 pop()
*4 push()
*5 shift()
*6 unshift()
*7 mudar elementos a partir do indexador
*8 length
*9 concat()
*10 flat()
*11 splice()
*12 slice()
*/
//1

let fruits = [
    "apple",
    "banana",
    "orange",
    "avocado",
    "pinaple",
];

console.log(fruits.toString());

//2

let cars = [
    "gol",
    "bmw",
    "volvo",
    "cruze"
];

console.log(cars.join(" * "));

//3

let numbers = [
    1,
    4,
    5,
    6
];
numbers.pop();
console.log(numbers);

//4

let negNumbers = [
    -1,
    -4,
    -5
];
negNumbers.push(-6);
console.log(negNumbers);

//5

let flotNumbers = [
    4.5,
    5.7,
    6.8
];
flotNumbers.shift();
console.log(flotNumbers);

//6

let books = [
    "The lord of the rings",
    "The Hobbit",
    "Unfinished Tales"
];
books.unshift("Duna");
console.log(books);

//7

let chaging = [
    "Change my value"
];

chaging[0] = "Hello";
console.log(chaging);

//8

let numbers_2 = [
    5, 
    4,
    7,
    8
];

numbers_2[numbers_2.length] = "a number";
console.log(numbers_2);

//9

let boys = [
    "carlos",
    "gabriel",
    "joão",
    "paulo"
];

let girls = [
    "melissa",
    "sara",
    "lara",
    "joana"
];

let boysAndGirls = boys.concat(girls);
console.log(boysAndGirls);

//10

let myArray = [
    [[4]],
    [5],
    [6]
];
console.log(myArray);

let myNewArray = myArray.flat();
console.log(myNewArray);

//11

let my_array = [];
my_array.splice(4, 5, "sring", [], {}, true);
my_array.splice(0, 2)
console.log(my_array);

//12

let alimentos = [
    "arroz",
    "feijão",
    "leite",
    "pão",
    "macarrão"
];

let alimentBases = alimentos.slice(1, 4);
console.log(alimentBases);



