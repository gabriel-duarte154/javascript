//flag i usada para casos onde não importa se a string contem letras maíusculas ou minusculas
let myArray = [
    "freeCodeCamp",
    "FREECODECAMP",
    "fREECodeCamp",
    "freecodecamp"
];

let myRegEx = /freecodecamp/i;

myArray.forEach(string => {
    let result = myRegEx.test(string);
    console.log(result);
})