//Podemos usar o spread operator, o qual nos permite usar arrays onde era esperado multiplos parametros

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);
console.log(maximus);

//contudo esse metodo so funciona para prametros de função ou literais array;

//const spreaded = ...arr; gera um erro

const months = ["Jan", "Fev", "Mar", "Apr"];
let months2;
months2 = [...months];
console.log(months2);