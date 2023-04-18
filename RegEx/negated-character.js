let string = "3 blind mice.";
let regex = /[^0-9aeiou]/gi;
let result = string.match(regex);

console.log(result);