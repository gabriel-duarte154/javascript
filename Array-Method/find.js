//Metodo find
const pizzas = [
    "mussarela",
    "peperoni",
    "calabresa",
    "margarita"
];
let sabor = "margarita"
const findPizza = (pizza, sabor ) => pizza === sabor ;

console.log(pizzas.find( (pizza) => findPizza(pizza, sabor)));