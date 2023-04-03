let word = "gabriel";

function capitalize(string) {

    let firstLetter = string.charAt(0).toUpperCase();
    let restOfString = string.slice(1, ).toLowerCase();
    let capitalizeString = firstLetter + restOfString;
    return capitalizeString;
    
};

console.log(capitalize(word));

function lastLatter(string) {

    let length = string.length -1;
    let last = string.charAt(length);
    return last;
};

console.log(lastLatter(word));