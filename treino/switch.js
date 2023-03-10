function Test(val){ 
    let answer = ''
    switch(val){
        case 1:
            answer = "alpha"
            break
        case 2:
            answer = "beta"
            break
        case 3:
            answer = "gamma"
            break
        case 4:
            answer = "delta"
            break
        default:
            answer = "não esta na lista."   
            break 
    }
    console.log(answer)
}
Test(2)

//Caso tenha uma única resposta para várias possibilidades.
function MulAwr(val){
    let answer2 = ""
    switch(val){
        case 1:
        case 2:
        case 3:
            answer2 = "dog"
            break
        case 4:
        case 5:
        case 6:
            answer2 = "cat"
            break   
        case 7:
        case 8:
        case 9:
            answer2 = "bird"
            break
    }
    console.log(answer2)
}
MulAwr(4)