//obeject declaração
let pessoa = {
    nome:'gabriel',
    peso:71, 
    sexo:'M', 
    engordar(p){
        console.log('Engordou')
        this.peso += p
    }
}
pessoa.engordar(2)
console.log(`${pessoa.nome} pesa ${pessoa.peso}kg`)