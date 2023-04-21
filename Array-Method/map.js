const numbers = [
   4, 5, 8, 7, 9
];

let numbersplusTwo = numbers.map((number) => {
    return number + 2
});

console.log(numbersplusTwo);

//Array de objetos

let users = [
    {firstName: "Susan", lastName: "Steward"},
    {firstName: "Daniel", lastName: "Lognottom"},
    {firstName: "Jacob", lastName: "Black"},
];

users.map(({firstName, lastName}) => {
    console.log(firstName, lastName)
});

//map completo;

let nums = [4, 5, 8, 9];
nums.map((el, index, array) => {
    console.log("--------------")
    console.log(el)
    console.log(index)
    console.log(array)
    console.log("--------------")
    
}, "This value");

