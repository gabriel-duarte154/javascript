//declaração de vaiáveis

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
let valorCompra;
let lucro;
let valorFinal;


//fim

//Área de entrada de valores

readline.question(`What's your name?`, name => {
    console.log(`Hi ${name}!`)
    readline.close()
  })
  
//Fim

// Tratamento e saída de dados

if (valorCompra < 20 ) {

    lucro = valorCompra * 0.45;
    valorFinal = lucro + valorCompra;
} else {

    lucro = valorCompra * 0.30;
    valorFinal = lucro + valorCompra;
};


console.log(valorFinal.toLocaleString("pt-br", {style: 'currency', currency:"BRL"}));