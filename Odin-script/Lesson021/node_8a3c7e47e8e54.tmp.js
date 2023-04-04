let number = 10;
let printPrimes = (num) => {
   out: for (let i = 2; i < num; i++) {
        if (i == 2) {
            console.log(i)
        } else if (i % 2 != 0) {
            for (let j = i - 1; j < 3; j--) {
                if (i / j == 0){continue out};
            }
            console.log(i)
        }
    }
} 
printPrimes(number);