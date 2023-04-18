//Usamos ? para dizer que determinada parte de uma string é opcional
let favWord = "Favorite";
let british = "Favourite";
let regex = /Favou?rite/;
console.log(regex.test(favWord));
console.log(regex.test(british));