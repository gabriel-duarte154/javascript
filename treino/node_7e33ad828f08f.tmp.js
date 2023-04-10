function sum (array) {
    console.log("Somando...")
    return array.reduce((total, current) => total + current, 0);
}

console.log(sum([1, 2, 5]));

const palindromesp = function (string) {
    let reverseString = ""
    for (let i = string.length; i >= 0; i-- ) {
        reverseString += string.charAt(i);
    };
    console.log(reverseString)
    if (reverseString == string) {
        return true;
    } else {
        return false;
    };
};


const palindromes = function (string) {
    let stringClean = ""
    let regex = /[^!.,]/;
    let reverseString = "";
    for (let i = 0; i < string.length; i++) {
        if (regex.test(string[i])){
            string += string[i]
        } else {
            continue;
        };
    };
    console.log(stringClean);
};


palindromes("racecar!")