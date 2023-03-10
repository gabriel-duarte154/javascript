function random(max, min){
    return Math.floor(Math.random() * (max - min + 1)) + min
}
console.log(random(1000, 5))