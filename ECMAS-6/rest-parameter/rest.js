//podemos podemos criar funções que recebem vários paramêtros, esse paramêtros seram armazenados em uma array

const howMany = (...args) => {
    return `Você passou ${args.length} argumentos para essa função`
};

console.log(howMany(null, 1, [1, 5]));

//função para a soma de vários números 

const sum = (...nums) => {
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        total += nums[i]
    };
    return total;
};

console.log(sum(4, 5, 8, 9, 7, 5));

