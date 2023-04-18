let userNames = [
    "JACK",
    "J",
    "Jo",
    "Oceans11",
    "RegexGuru",
    "007",
    "g",
    "A1",
    "BadUsr3nam3",
    "Z97",
    "c57bT3",
    "AB1",
    "J%4"
];

let regUserName = /^[a-z]{2,}([0-9]*)?$|^([a-z]{1})([0-9]{2,})$/gi;

userNames.forEach(userName => {
    let result = userName.match(regUserName);
    console.log(result)
});
