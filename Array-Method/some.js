//Metodo some
const team = [
	{ id: 12, name: "Troper", pilot: true },
	{ id: 12, name: "Trigger", pilot: false },
];
console.log(team.some(person => person.pilot));

const nums = [7, 5, 8, 9];
const isEven = (element) => element % 2 == 0;   

let someEven = nums.some(isEven) 
console.log(someEven);