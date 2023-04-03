
let word = "Eu sou uma string";


const downUp  = (string, length) => string.slice(0, length);


function letterDown(string) {
    for(let i = string.length; i > 0; i--) {
        console.log(downUp(string, i));
    };
    for(let i = 2; i <= string.length; i++) {
        console.log(downUp(string, i));
    };
}

letterDown(word);