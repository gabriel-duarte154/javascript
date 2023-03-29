let button = document.querySelector("button")
button.addEventListener("click", greeting);

function greeting() {

    let user =  window.prompt("What is your name?");
    if (user != null , user != "") {
        window.alert(`${user}, nice to see you!`)
    }

};