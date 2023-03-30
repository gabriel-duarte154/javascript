const inputs = document.querySelectorAll('input');

const patterns = {
    telephone: /^\d{2}\s(9)\s\d{4}\s\d{4}$/,
    username: /^[a-z\d]{5,12}$/i,
    password: /^[\w@-]{8,20}$/,
    email: /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    profileSlug: /^[a-z\d-]{8,20}$/
};

function validate(fild, regex) {
    if (regex.test(fild.value)) {
        fild.className = "valid"
    } else {
        fild.className = "invalid"
    };
    if (fild.name.value = null) {
        fild.className = ""
    }
};

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
       validate(e.target, patterns[e.target.attributes.name.value])
    });
});
