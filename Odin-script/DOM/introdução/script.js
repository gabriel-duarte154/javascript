let container = document.querySelector("#container");
let p = document.createElement('p');
let h3 = document.createElement('h3');
let div = document.createElement('div');

p.innerText = "Hey, I'm red.";
p.style.cssText = "color: red;";
container.appendChild(p);

h3.innerText = "I'm a blue h3!";
h3.style.cssText = "color: blue;";
container.appendChild(h3)

div.style.cssText = "border:1px solid black; background-color: pink;";
let h1 = document.createElement("h1");
let param = document.createElement('p');

h1.innerText = "I'm in a div";
param.innerText = "ME TOO!"
div.appendChild(h1);
div.appendChild(param);
container.appendChild(div);


param.className = param.className === "content" ? "" : "content";



