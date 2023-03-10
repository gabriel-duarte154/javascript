
let botoes = document.querySelectorAll('button')

for(var i = 0; i < botoes.length; i++){
    botoes[i].addEventListener('click', gerar)
}
function gerar(){
    let para = document.createElement('button')
    para.innerText = "Você clicou"
    document.body.appendChild(para)
    
}
