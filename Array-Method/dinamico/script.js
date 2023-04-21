const list = document.querySelector("#list");
console.log(list);

let fruits = [
    "apple",
    "banana",
    "pinaple",
    "mango",
    "kwiui",
    "pear",
    "cenoura"
];

let listItems = fruits.map(el => {
    return `<li class="item">${el}</li>`
});

console.log(listItems);

listItems.forEach(item => {
    list.innerHTML += item
});
