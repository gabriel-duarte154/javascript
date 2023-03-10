function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = document.querySelector('input#ano')
    var idade = ano - nasc.value
    var res = document.querySelector('div#res')
    if (nasc.value.length == 0 || nasc.value > ano){
        window.alert("[Erro] verifique os dados e tente novamente.")
    }else{
        var sex = document.getElementsByName("radiosex")
        var  genero  = ""
        var img = document.createElement("img")//cria um elemnto do tipo imegem
        img.setAttribute('id', 'foto')//atribui a um elemento um id
        if (sex[0].checked){
            genero = "homem"
            if (idade >= 0 && idade <= 11){
                //crianca
                img.setAttribute('src', 'criancamasculino.jpg')
            }else if (idade >= 12 && idade <= 22){
                //jovem
                img.setAttribute('src','jovemmasculino.jpg' )//atribui a img uma imagem dentro da pasta do server
            }else if (idade >= 23 && idade <= 59){
                //adulto
                img.setAttribute('src', 'homem.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'idoso.jpg')
            }
        }else{
            genero = "mulher"
            if (idade >= 0 && idade <= 11){
                //crianca
                img.setAttribute('src', 'criancafeminino.jpg')
            }else if (idade >= 12 && idade <= 22){
                //jovem
                img.setAttribute('src', 'jovemfeminino.jpg')
            }else if (idade >= 23 && idade <= 59){
                //adulto
                img.setAttribute('src', 'mulher.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'idosa.jpg')
            }
        }
            res.innerHTML= (`Detectamos ${genero} com ${idade} anos.` )
            res.appendChild(img)//adiciona um apendice dentro do res
        }
    }