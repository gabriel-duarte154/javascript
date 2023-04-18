//por padrão uma regex da match com a maior string que ela encontrar, mas isso pode ser alterado com o lazy ?, que o fará dar match com a menor string que encontrar

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/;
let result = text.match(myRegex);

console.log(result);