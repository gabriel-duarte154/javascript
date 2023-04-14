// Only change code below this line
class Vegetable {
    constructor(name) {
      this.name = name;
    }
  }
  // Only change code above this line
  
  const carrot = new Vegetable('carrot');
  console.log(carrot.name); // Should display 'carrot'

  class Saudacao {
	constructor() {
			console.log("Ola, mundo")
	}
};

let myVar = new Saudacao();


class Carro {
	
	constructor(cor) {
		this.cor = cor;
		console.log(`Sou um novo carro de cor ${this.cor}`)
	}

};
let car1 = new Carro("vermelho");
let car2 = new Carro("Azul");
let car3 = new Carro("Violete");
let car4 = new Carro("Verde");


