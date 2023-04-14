//Com ecmaa 6 podemos escrever funções anonimas de maneira mais simples

//jeito antigo

const myFunc = function() {
    const myVar = "value";
    return myVar;
};

//Novo metodo

const myNewFunc = () => {
    const myVar = "value";
    return myVar;
};

//Caso a função somente retorne um valor

const getDate = () => new Date();

//podemos passar parametros para essas arrow functions

const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 4], [5, 7]));

//POdemos definir parametros padrões para nossas funções

const increment = (number, value = 1) => number + value;

console.log(increment(2));