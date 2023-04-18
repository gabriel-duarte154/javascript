//Podemos procurar por white sapce nas strings usando \s, não só white space como tab, new lines e feed

let whiteSpace = "Whitespace. Whitespace everywhere.";
let regex = /\s/g;
let result = whiteSpace.match(regex);

console.log(result);

//Funciona do mesmo jeito que as demais \S procurar por coisa que não são whitespace

let sample = "Whitespace is important in separating words";
let countNoWhiteSapce = /\S/g;
let resultNoWhiteSpace = sample.match(countNoWhiteSapce);
console.log(resultNoWhiteSpace);