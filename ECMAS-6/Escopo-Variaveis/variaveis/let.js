//Delcarando variável com a keyword let

function checkScope() {
    let i = "function scope";
    if (true) {
       let i = "block scope";
        console.log(i);
    };
    console.log("Function scope i is:", i);
    return i;
};

console.log(checkScope())

//Neste caso onde cada variavel foi declarada será o seu escopo

//declarando uma variável com const

const myConst = "blueberry";
//myConst = "pinaple";

//Isso gerará um erro 

const myArray = [0, 5, 7, 6, 9];
//myArray = [0, 5, 6]; gerará um erro 
myArray[5] = 4;
console.log(myArray);