
//Multiplas condições ternárias

function biEqLes(n1, n2){
    return (n1 == n2) ? "Equal" : (n1 > n2) ? `${n1} is greater` : `${n2} is greater`
}
console.log(biEqLes(7, 10))