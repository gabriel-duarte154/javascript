//Usaremos o (?=) e (?!) para procurar por determinado padrão em uma string 
// let quit = "q";
// let noQuit = "qt";
// let regexQuit = /q(?=u)/;
// let regexNoQuit = /q(?!u)/;
// console.log(regexQuit.test(quit));
// console.log(regexNoQuit.test(noQuit));



//Desafio 5 charaters long 2 consecutives digits
let passwords = [
    "lookaheads",
    "astronaut",
    "banan1",
    "bana12",
    "abc123",
    "12345",
    "8pass99",
    "1a2bcde",
    "astr1on11aut",
];

let regex = /(?=\w{6})(?=\D*\d{2})/;

passwords.forEach(password => {
    let result = regex.test(password);
    console.log(result);
})