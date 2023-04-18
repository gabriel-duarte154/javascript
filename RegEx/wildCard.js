let myArray = [
    "Let us go on a run.",
    "The sun is out today.",
    "Coding is a lot of fun.",
    "even days without a pun makes one weak.",
    "let's take a break and rest."
];

myArray.forEach(string => {
    let regex = /.un/;
    let result =  string.match(regex);
    console.log(result);
})