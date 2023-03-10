function carregar(){
    var msg = window.document.querySelector('div#msg')
    var img = document.querySelector('img#imagem')
    var saud = document.querySelector('div#saudacao')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getUTCMinutes()
    msg.innerHTML = `Agora são ${hora}:${min}`
    if (hora >= 0 && hora < 12){
        //bom dia
        img.src = 'fotomanha.jpg'
        document.body.style.background ="#0a81d5"
        saud.innerHTML ="Bom dia!"
    }else if(hora >= 12 && hora < 18){
        //boa tarde
        img.src = 'fototarde.jpg'
        document.body.style.background = "#fd6f2e"
        saud.innerHTML ="Boa tarde!" 
        } else{
        //boa noite
        img.src = 'fotonoite.jpg' 
        document.body.style.background ="#1c3e5f"  
        saud.innerHTML ="Boa noite!" 
    }

}