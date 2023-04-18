//Podemos usar {2,4} para definir um renge de quantas vezes aquele padrão é permitido

let ohStr = [
    "ohhhhhh no",
    "ohhh no",
    "ohhhh no",
    "ohhhhh no",
    "ohhhhhhhhhhh no",
    "oh no"
];

let ohRegex = /oh{3,6}\sno/;

ohStr.forEach(string => {
    let result = ohRegex.test(string);
    console.log(result);
});

//podemos delimitar somente o lower case dessa maneira {1,} isso quer dizer que determinado padrão deve aparecer pelo menos uma vez

let A100 = "h" + "a".repeat(100) + "h";
let regex = /ha{1,}h/;
let result = regex.test(A100);
console.log(result);
console.log(A100);

//No último caso podemos especificar uma quantidade exata de vezes que determinado padrão ira se repetir {2}, por exemplo

let string = "haaah"
let anotherString = "hah"
let regex1 = /ha{3}h/;
console.log(regex1.test(string));
console.log(regex1.test(anotherString));

