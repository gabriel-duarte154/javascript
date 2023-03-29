//Length, usado para saber quantos caracteres possui uma string

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(text.length)

//Length é uma metodo e não possui parênteses 

//String slice(), extrai uma parte de uma string é retorna a parte extraída em uma nova string, recebe dois parâmetros o início e o fim

text = "Aplle, Banana, Kiwi";
let slice = text.slice(7, 13);
console.log(slice);

//subtring(), a única de diferença e que se os valores passados forem menores que zero serâo considerados zeros

let subtring = text.substring(0, 13);
console.log(subtring);

//Replace method troca determinada parte de uma variável por outra

let msg =  "Please visit Microsoft"
let replaceString = msg.replace("Microsoft", "W3schools");
console.log(replaceString)

//Replace é case sensitive, para resolver esse problema precisamos usar expressões regulares

let msg2 = "Please visit MicroSoft"
let replaceString2 = msg2.replace(/Microsoft/i, "W3schools")
console.log(replaceString2)

//Para trocar todas as strings com o mesmo valor use a /g

let msg3 = "Please visit Microsoft and Microsoft";
let replaceString3 = msg3.replace(/Microsoft/g, "W3schools");
console.log(replaceString3);

//ReplaceAll() motodo que permite especificar uma regular espressão em vex de uma string

text = "Cats, Birds, Cats";
let replaceText = text.replaceAll("Cats", "Dogs");
console.log(replaceText)

//toUpperCase() trasforma a string em letras maiúsculas

text = "this is serius";
console.log(text.toUpperCase());

//toLowerCase faz o contrário

text = "WHY AM I STILL HERE?"
console.log(text.toLowerCase())

//concat() faz a concatenação

 let text1 = "Hello, i'am Gabriel and, "
 let text2 = "this part of the text was concated"
 console.log(text1.concat(text2))

 //trim() remove espaços em branco de strings

 text = "     why?"
 console.log(text)
 console.log(text.trim())

 //trim() possui variações trimStart() e trimEnd()

 //padStart() e padEnd() preenche uma string, são passados dois parâmetros um será o length e o outro o que será adicionado

 text = "5";
 console.log(text.padStart(5, "01"));

 //charAt() e charCodeAt() estraem o caracter de uma posição específica

 text = "Unbelive";
 console.log(text.charAt(2));
 console.log(text.charCodeAt(2));

 //split() trasforma um string em uma array 

 let string = "sex rock'n roll drogs";
 let array = string.split();
 console.log(array)

