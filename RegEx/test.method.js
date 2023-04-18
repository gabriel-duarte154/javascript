let myString = "Hello, World";
let myRegEx = /Hello/;
let result = myRegEx.test(myString);
console.log(result); 

//Outro exemplo

let waldoIsHiding = "Somewhere Waldo is hiding is this text";
let waldoRegEx = /Waldo/;
let waldoResult = waldoRegEx.test(waldoIsHiding);

console.log(waldoResult);
