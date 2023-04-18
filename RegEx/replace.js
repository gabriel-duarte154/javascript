let myString = "The sky is silver";
let myRegex = /silver/;
let myReplaceString = myString.replace(myRegex, "blue");
console.log(myReplaceString);

//Usando capturing groups
console.log("-------------\nReplace  using capture groups\n-------------")
let str = "one two three";
let fixregex = /(\w+) (\w+) (\w+)/;
let replaceText = "$3 $2 $1";
let replaceStr = str.replace(fixregex, replaceText);
console.log(str)
console.log(replaceStr);
