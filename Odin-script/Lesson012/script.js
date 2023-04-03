
function square(num) {
    return num * num;
};

function cubic(num) {
    return num * num * num;
};

function fatorial(num) {
    if (num < 0) return undefined;
    if (num == 0) return 1;
    let x = num - 1;
    while (x > 0) {
        num *= x;
        x--;
    };
    return num;
};


const input = document.querySelector("input");
const para = document.querySelector("p");

input.addEventListener("change", () => {

    let num = parseFloat(input.value);
    if (isNaN(num)) {

        para.textContent = "Digite um número."

    } else {

        console.log(square(num));
        para.innerHTML = `O quadrado desse número é ${square(num)}<br>`;
    
        console.log(cubic(num));
        para.innerHTML += `O cubo desse número é ${cubic(num)}<br>`;
        
        console.log(fatorial(num));
        para.innerHTML += `O fatorial desse número é ${fatorial(num)}`;
        
    };

});