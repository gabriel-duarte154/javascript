class Thermostat {
    constructor(temp) {
      this.temp = temp;
    }
    get temperature() {
      return (this.temp - 32) * (5 / 9)
    }
    set temperature(newtemp) {
      this.temp = (newtemp * 9 / 5) + 32;
    }
  }
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius


//Outro exemplo

class Carro {
	constructor(marca, modelo, cor, comb, km) {
		this.marca = marca
		this.modelo = modelo
		this.cor = cor
		this.comb = comb
		this.km = km
  }
  log() {
    console.log(`
    Marca......: ${this.marca}
    Modelo.....: ${this.modelo}
    Cor........: ${this.cor}
    KM.........: ${this.km}
    Combustível: ${this.comb}
    ...............................
    `
    )
  }
  set setComb(updateComb) {
    if(updateComb < 0 || updateComb > 100) {
      console.warn(`Valor inválido ${updateComb}`)
    } else {
      this.comb = updateComb;
    }
  }
}

let car1 = new Carro("W", "gol", "vermelho", 50, 120);
car1.log()