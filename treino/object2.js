let meuCarro = {
    fabricacao: "Ford",
    modelo: "gol",
    ano: 2008
}
function mostrarProps(obj, meuOb) {
    var resultado = "";
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            resultado += `${meuOb}.${i} = ${obj[i]} \n`;
        }

        
    }
    return console.log(resultado);
}
mostrarProps(meuCarro, "meuCarro" )
