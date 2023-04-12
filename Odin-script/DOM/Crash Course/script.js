let form = document.querySelector('#addForm');
let itemList = document.querySelector("#items")
let btn = document.querySelectorAll(".delete");
let filter = document.querySelector('#filter');

form.addEventListener('submit', addItem);
btn.forEach((e) => deleteItem(e));
filter.addEventListener("keyup", filterItem);



function addItem(e) {
    e.preventDefault();
    let newItem = document.querySelector('.form-control');
    let li = document.createElement('li');
    li.classList = "item-list";
    li.innerText = `${newItem.value}`
    let del = document.createElement('button');
    deleteItem(del)
    del.innerText = "X"
    del.classList = "delete"
    li.appendChild(del);
    itemList.appendChild(li);    
};

function deleteItem (e) {
    e.addEventListener('click', () => {
        if(window.confirm("Are you Sure?")) {
            let li = e.parentElement;
            itemList.removeChild(li);
        };
    });
};

function filterItem(e) {
    let text = e.target.value.toLowerCase();
    let items = itemList.getElementsByTagName('li');
    Array.from(items).forEach((item) => {
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1 && text != "") {
            item.style.backgroundColor = "lightgrey";
            item.style.border = "1px solid gold"
        }else {
            item.style.backgroundColor = "white";
            item.style.border = "0.5px solid grey"
        }
    });
};