let valoresEnt = []
function adicionar(){
    res.innerHTML = ''
    let entrada = document.querySelector("input#entrada")
    let selecao = document.querySelector("select#selecao")
    let num = Number(entrada.value)
    if (num < 1 || num > 100 ){
        window.alert("Número invalido ou campo vazio.")
    }else if(valoresEnt.indexOf(num) != -1){
        window.alert("Número já adicionado.")
    }else{
         valoresEnt.push(num)
         let adicionados = document.createElement('option') 
         for ( let pos in valoresEnt){
                adicionados.innerText = `Valor ${valoresEnt[pos]} Adicionado `
                selecao.appendChild(adicionados)
            }
         }
    entrada.value = ''
    entrada.focus()
}
function finalizar(){
    let res = document.querySelector("label#res") 
    let soma = 0
    let maior = 0
    let menor = valoresEnt[0]
    res.innerHTML = ''
    if (valoresEnt == ''){
        window.alert('Adicione pelo menos um número para finalizar.')
    }else{
        for (let pos in valoresEnt){
            soma += valoresEnt[pos]
            if (valoresEnt[pos] > maior){
                maior = valoresEnt[pos]
            }
            if (valoresEnt[pos] < menor){
                menor = valoresEnt[pos]
            }
        }
        res.innerHTML = (`Foram registrados ${valoresEnt.length} números.<br>`)
        res.innerHTML += (`<p>O maior número registrado foi ${maior}.<br></p>`) 
        res.innerHTML += (`<p>O menor número registrado foi ${menor}.<br></p>`)
        res.innerHTML += (`<p>A soma dos  números é igual a ${soma}.<br></p>`)
        res.innerHTML += (`<p>A média dos números é igual a ${soma / valoresEnt.length}.</p>`)
    }
}
function limpar(){
    selecao.innerHTML = ''
    res.innerHTML = ''
    valoresEnt = []
}