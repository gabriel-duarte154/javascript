var p = document.querySelector("div#p")
p.addEventListener("click",atualizarName)


function atualizarName(){
    let en = window.prompt("Nome do player?")
    p.innerHTML = `player 1:${en}`
}