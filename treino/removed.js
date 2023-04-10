function sum (array) {
    console.log("Somando...")
    return array.reduce((total, current) => total + current, 0);
}

console.log(sum([1, 2, 5]));

const palindromes = (string) => {
    let replaceString = string.toLowerCase().replace(/[^a-z]/g, "");
    return replaceString.split("").reverse().join("") == replaceString;

};

console.log(palindromes("racecar"))
