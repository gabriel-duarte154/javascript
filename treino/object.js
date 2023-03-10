const myDog = {
  'name': 'espetinho',
  'legs': 4,
  'tails': 1,
  'friends and partens': ["mel", "bilosca", "spike"]
};
console.log(myDog.name)// duas maneiras de acessar um objeto . ou []
console.log(myDog["friends and partens"])// [] colchetes são usados quando a propriedade do obejeto possui espaço na declaração
myDog.name = "Spike"
myDog.bark = "woof"//adicionando novas propriedades a um obejeto
console.log(myDog)
delete myDog.tails //excluindo propriedades de um objeto
console.log(myDog)
console.log(myDog.hasOwnProperty("name")) //vai testar se essa propriedade existe no objeto