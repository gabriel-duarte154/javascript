//É uma especial sintase, para valores aninhados tirados diretamente de um objeto

const user = {name: "gabriel", age: "19"};

const {name, age} = user;

console.log(age);

//Será criado duas novas variáveis (name, age) e o seu valor será o mesmo que user.age, user.name

//podemos atribuir novos novos nomes para essas variáveis

const {name: userName, age: userAge} = user;

console.log(userName, userAge);

//Podemos usar o mesmo princípio para objetos aninhados

const user2 = {
    gabriel: {
        age: 19,
        email: "gabrieljunior@gmail.com"
    }
};

const {gabriel:{age: age1, email: userEmail}} = user2;

console.log(age1, userEmail);