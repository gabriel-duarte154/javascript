let input = document.querySelector('input');
let output = document.querySelector('#output');
let button = document.querySelector('button')



function contar () {

    output.innerHTML = ""
    let para = document.createElement('p');
    output.appendChild(para);
    for(let i = Number(input.value); i >= 0; i--) {
        if (i == input.value) {para.textContent = "Preparando contagem "};
        if (i >= 1) {
            para.textContent += `${i}, `;
        } else {
            para.textContent += `${i}.`
        }
        
    };
   let reset = document.createElement('button')
   reset.innerText = "Resetar";
   reset.className = "cor"
   output.appendChild(reset);
   reset.addEventListener('click', () => {
    document.location.reload(true);
   })
};

button.addEventListener("click", contar);

