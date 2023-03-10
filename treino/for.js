let myVar = [];
 for (let i = 9; i > 0; i -= 2){
    myVar.push(i)
    console.log(`foi adicionado ${i} a myVar`)
 };
 console.log(`myVar[${myVar}]`)
 let total = 0;
 for (let i = 0; i < myVar.length; i++){
    total += myVar[i]
    console.log(`meu valor é ${total}.`)
 }
