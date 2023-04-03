function mensage(text = "\"empty\"") {
    console.log(text)
}

mensage("aqui estou eu dentro do parâmetro de uma função fazendo um teste de default parâmetros.")
mensage()

const sum = (a, b) => {
    if (isNaN(a) || isNaN(b)) return "Digite um número válido"
    return a + b;
};

console.log(sum(10, 5))
