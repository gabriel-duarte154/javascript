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