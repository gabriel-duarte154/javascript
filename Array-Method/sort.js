//Metodo sort()

let months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);

//Com uma função

let nums = [4, 5, 8, 9, 7];
let asOrder = nums.sort((a, b) => a > b ? 1 : -1);
console.log(asOrder);