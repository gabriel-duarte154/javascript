//Metodo filter 
//Usando filter para filtrar números maiores que 10

let nums = [
    10,
    15,
    1,
    2,
    48,
    12,
    6,
    8,
    12,
    45,
    96
];

let numsBigger10 = nums.filter((num) => num > 10 ? true : false );

console.table(numsBigger10);

let data = [
    {id:15},
    {id:0},
    {id:null},
    {id:NaN},
    {id:18},
    {id:15},
    {id:"nbv"},
    {id:undefined},
    {id:56},
];


let validId = data.filter((obj) => {
    if (typeof obj.id === "number" && !isNaN(obj.id)) {
        return true
    }
})
console.log(validId)

//Usando metodo filter para filtrar palavras com mais de 5 letras

let words = [
    "spray",
    "limit",
    "elite",
    "destruction",
    "cat",
    "god",
    "dog",
    "filter",
    "protype",
    "typeof",
    "without",
];

let fiveOrMore = words.filter(word => word.length >= 5);
console.log(fiveOrMore)

//Usando filter para filtrar números menores que 5

let numbers = [
    45, 
    4,
    7,
    8,
    2,
    1,
    2,
    3,
    4,
    6,
    5,
    1
];

let lessThanFive = numbers.filter(num => num < 5);

console.log(lessThanFive);

let myObject = {
    rd: 15
}

console.log(myObject.id)

if (myObject.id) {
    console.log(`id: ${myObject.id}`)
} else {
    console.warn("Indexador não existente")
}




 let fruits = [
    "apple",
    "banana",
    "pinaple",
    "mango",
    "orange",
    "graps"
 ];

 
 function filterItems(query, array) {
    return array.filter((el) => {
         return el.toLowerCase().indexOf(query.toLowerCase()) > -1
    })
 }

 console.log(filterItems("o", fruits));
