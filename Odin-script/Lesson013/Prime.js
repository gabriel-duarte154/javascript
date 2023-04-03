function showPrimes(num){
    
    for (let i = 2; i <= num; i++){
    if (!isPrime(i)) continue;
    console.log(i);
};

}

function isPrime(num){

    for (let i = 2; i <= num; i++){
        if (num % i == 0 && num != 2) return false;
        return true;
    
    };
};

showPrimes(10);