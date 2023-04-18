function carregar(){
    var msg = window.document.querySelector('div#msg')
    var img = document.querySelector('img#imagem')
    var saud = document.querySelector('div#saudacao')
    var data = new Date()
    var hora = data.getHours();
    var min = data.getMinutes();
    msg.innerHTML = `Agora são ${hora}:${min}`
    if (hora >= 0 && hora < 12){
        //bom dia
        img.src = 'fotomanha.jpg'
        document.body.style.cssText = 'background-image: linear-gradient(225deg, #0082DA, #EBF8FE)'
        document.body.style.color = "black"
        saud.innerHTML ="Bom dia!"
    }else if(hora >= 12 && hora < 18){
        //boa tarde
        img.src = 'fototarde.jpg'
        document.body.style.cssText = 'background-image: linear-gradient(#FEA001, #D03300)'
        saud.innerHTML ="Boa tarde!" 
        } else{
        //boa noite
        img.src = 'fotonoite.jpg' 
        document.body.style.cssText = 'background-image: linear-gradient( #23497A, #1F5264)' 
        saud.innerHTML ="Boa noite!" 
    }
}
