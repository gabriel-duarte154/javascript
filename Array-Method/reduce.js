let myArray = [0, 4, 5, 7, 8];

myArray.reduce((acumulador, valorAtual, index, array) => {
    console.log("\n")
    console.log(`acumulador: ${acumulador}`)
    console.log(`valorAtual: ${valorAtual}`)
    console.log(`index: ${index}`)
    console.log(`array: ${array}`)
    console.log("\n")
    return acumulador += valorAtual;
}, 0);

let names = ["Alice", "Bob", "Tylor", "Trevor", "Alice", "Bob", "Trevor"];

let namesAmount = names.reduce((obj, name) => {
    if (name in obj) {
        obj[name] +=1
    } else {
        obj[name] = 1;
    }
    return obj
}, {});

console.log(namesAmount);


//retirando números repetidos

let nums = [4, 1, 1, 1, 2, 5, 8, 9, 6, 6, 6, 6, 6, 5, 5, 8];
console.log(nums.sort())

let result = nums.sort().reduce((array, currentValue) => {
    if (array.length === 0 || currentValue !== array[array.length -1]) {
        array.push(currentValue);
    };
    return array;
}, []);

console.log(result);