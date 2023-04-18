let myArray = [
    "John has a pet dog.",
    "Emma has a pet rock.",
    "Emma has a pet bird",
    "Liz has a pet cat.",
    "Kara has a pet dolphin."
];

let regEx = /dog|cat|bird|fish/;


myArray.forEach(string => {
    let result = regEx.test(string);
    console.log(result)
})
