function mul(arr){
    let produto = 1;
    for (let i = 0; i < arr.length; i++ ){
        for (j = 0; j < arr[i].length; j++){
            produto *= arr[i][j]
        };
    };
    return console.log(produto);
}
 mul([[4, 5],[5, 1],[2, 1], [4, 5, 6, 8]])