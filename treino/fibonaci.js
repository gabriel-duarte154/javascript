const fibonaci = (position) => {
    let a = 1;
    let b = 0;
    let c;
    for (let i = 1; i <= position; i++) {
        c = a + b;
        b = a + b;
        a = b - a;  
    };
    console.log(c)
};

fibonaci(4)