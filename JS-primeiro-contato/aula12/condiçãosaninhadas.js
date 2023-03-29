var agora =  new Date();
var hora = agora.getHours()
console.log(`São ${hora} horas.`)
if (hora >= 6 && hora < 12){
    console.log("Bom dia!")
}else if(hora >= 12 && hora < 19){
    console.log("Boa tarde!")
}else if(hora >=19 && hora < 24 || hora < 6){
    console.log("Boa noite!")
}
    
