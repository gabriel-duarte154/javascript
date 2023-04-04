const patterns = {
    telephone: /^([\d]{2})\s(9)([\d]{4})-([\d]{4})$/,
    username: /^[^\d]{5,10}_[\w]{5,10}$/
};
let result;

const validation = (regex, value) => 
regex.test(value) ? result = true : result = false;

validation(patterns.username, "gabriel_scjhs")
console.log(result);



