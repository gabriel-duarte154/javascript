// let string = "Aaaaaaaaaaarrrgh!";
// let regex = /Aa*/;
// let result = string.match(regex);

// console.log(result);


let myArray = [
    "Aaaaaaaaaargh",
    "Argh",
    "aaaaaaaaargh",
    "rgh"
];
let regex = /Aa*/;

myArray.forEach(string => {
    let result = string.match(regex);
    console.log(result);
});
