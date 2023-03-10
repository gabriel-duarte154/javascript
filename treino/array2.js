let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9]
function repElem(arr){

    for (let a = 0; a < arr.length; a++){

        for (let j = a + 1; j < arr.length; j++){

            if (arr[a] == arr[j]){

                return arr[a]
            }
        }
    }

    console.log("Não foi encontrado nenhum número repetido!")
}

console.log(repElem(array))