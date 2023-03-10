function tabuada(){
    var entrada = document.querySelector("input#entrada")
    var tabuada = document.querySelector("select#seltab") 
   if (entrada.value == "" ){
        tabuada.innerHTML = ""
        window.alert("[Erro]: intem vazio.")
    }else{
        tabuada.innerHTML = ""
        for(var c = 1; c <= 10; c++){
        let item = document.createElement('option')
        let a = Number(entrada.value)
        item.innerText = (`${a} * ${c} = ${a * c}`)
        item.value = `tab${c}`
        tabuada.appendChild(item)
        }
    } 
}