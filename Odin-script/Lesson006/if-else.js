let hours = new Date().getHours();
let greeting;
if ( hours < 18) {
    greeting = "good day";
} else {
    greeting = "good night"
}
console.log(greeting)

console.log(!!null)