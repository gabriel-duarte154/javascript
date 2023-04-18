//Podemos usar a shortHand \w para selecionar a-zA-z0-9_ 
let array = [
    "sdafa",
    "VVDVSV",
    "dvavadFDDFSSD",
    "13546",
    "13456scasc",
    "13644scaasFVSVSVS",
    "this_is_Awosome",
    "",
    " ",
    "@#$%¨&*"
];
let regex = /\w/;
array.forEach(string => {
    let result = regex.test(string);
    console.log(result);
});
console.log("\n-----------------------------------------------\n");

//O contrário de \w é \W que o que seria o mesmo que [^a-zA-Z0-9_]

let opositeRegex = /\W/;
array.forEach(string => {
    let result = opositeRegex.test(string);
    console.log(result);
});

console.log("\n------------------------------------------------\n");

//Tambem temos uma shorthand para digitos \d
let string = "2001: A Space Odyseey";
let reNumber = /\d/g;
let result = string.match(reNumber);
console.log(result.length);

console.log("\n-------------------------------------------------\n")

// Igualmente se  usarmos \D será o mesmo que [^0-9]
let notNumber = /\D/g;
result = string.match(notNumber);
console.log(result);