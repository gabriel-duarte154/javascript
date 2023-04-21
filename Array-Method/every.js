//Metodo every
let array = [15, 45, 85, 46, 12];
const isBiggerThan10 = num => num > 10;

console.log(array.every(isBiggerThan10));


let users = [
    {name:"Gabriel" , age: 17},
    {name:"João" , age: 18},
    {name:"Paulo", age: 18},
    {name:"Augusto" , age: 18}
];

const isAdult = ({age}) => age >= 18;

console.log(users.every(isAdult));
