let button = document.querySelector('button');

button.addEventListener("click", (e) => {
    if (e.target.style.background == "blue") {
        e.target.style.background = "#fff"; 
    } else {
        e.target.style.background = "blue"
    }
})

