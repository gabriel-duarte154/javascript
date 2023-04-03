let input = document.querySelector("input");
let p = document.querySelector("p");

input.addEventListener("change", () => {
    p.innerHTML = ""
    let number = Number(input.value);
    
    for (let i = 1; i <= number; i++) {
        
        if (i % 3 == 0  && i % 5 == 0){
    
            p.innerHTML += "--fizzBuzz--"
            continue;
        };
        if (i % 3 == 0) {
            
            p.innerHTML += "--Fizz--"
            continue;
        };
        if (i % 5 ==0) {
            
            p.innerHTML += "--Buz--"
            continue;
        };
        p.innerHTML += `--${i}--`;
        
    };

});
