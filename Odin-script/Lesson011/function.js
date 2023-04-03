const myText = "I am a string";
const newString = myText.replace("string", "sausege");
console.log(newString);

const myArray = ["I", "Love", "chocolate", "frogs"];
const join = myArray.join(" ");
console.log(join)

const randow = Math.floor(Math.random() * 10);
console.log(randow);

const originals = [1, 2, 3];
const doubled = originals.map((item) => item * 2);
console.log(doubled);