const inputs = document.querySelectorAll('input')

const patterns = {
    telephone: /^\d{2}\s(9)\s\d{4}\s\d{4}$/,
    username: /^\w{5,12}$/,
    password: /^\w{8,20}$/,
    email: /\w{2,20}@\w{2,10}.(com|me|io)/

}

function validate(fild, regex) {
    if (regex.test(fild.value)) {
        fild.className = "valid"
    } else {
        fild.className = "invalid"
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
       validate(e.target, patterns[e.target.attributes.name.value])
    })
})
