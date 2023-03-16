1function clicar(){
    var inicio = document.querySelector('input#inicio')
    var fim = document.querySelector('input#fim')
    var salto = Number(document.querySelector('input#salto').value)
    var res = document.querySelector('div#res')
    var contagem="";
    var c = Number(inicio.value)
    if(inicio.value == "" || fim.value == ""){
        window.alert("[Erro]Algumas das opções está vazia.")
        res.innerHTML = "IMPOSÍVEL CONTAR"
    }else if(salto == 0){ 
        window.alert("Imposível salto 0, determinando salto 1.") 
        while(c <= fim.value){
            contagem = `${contagem} ${c}..`
            c++
        }
        res.innerHTML = `Contando:<br> ${contagem} Terminei.`
    }else{
        while(c <= fim.value){
            contagem = `${contagem} ${c}..`
            c = c + salto
        }
        res.innerHTML = `Contando:<br> ${contagem} Terminei.`
    }
    
}