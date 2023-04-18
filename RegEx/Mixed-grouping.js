let myArray = [
    "Franklin D. Roosevelt",
    "Eleanor Roosevelt",
    "Franklin Rosevelt",
    "Frank Roosevelt",
    "FranklinRoosevelt",
    "EleanorRoosevelt"
];
let regex = /(Franklin|Eleanor)(\s[\w.]*)?\sRoosevelt/;

myArray.forEach(string => {
    let result = regex.test(string);
    console.log(result);
});