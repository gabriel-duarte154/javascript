let number = 10000000;
let printPrimes = (num) => {
    let isprime = true;
    for (let i = 2; i < num; i++) {
        if (i == 2) {
            console.log(i);
        } else if (i % 2 != 0) {
            for (let j = i - 1 ; j > 2; j--) {
                if (i % j == 0){
                    isprime = false;
                    break;
                }else {
                    isprime = true;
                };
            };
            if(isprime) {
                console.log(i)
            };
        };
    };
};
printPrimes(number);