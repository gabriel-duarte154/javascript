let num  = [2, 5, 1, 5, 8]
let maior = 0
let menor = 0
for (let pos in num){
    if (num[pos] > maior){
        maior = num[pos]
    }
    if (menor == 0){
        menor = num[0]
    }else if(num[pos] < menor){
        menor = num[pos]
    }
}
console.log(maior)
console.log(menor)