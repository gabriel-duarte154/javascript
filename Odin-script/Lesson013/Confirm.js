function getAge(age) {
    return age > 18 || console.log("Do you have permision of your parents?");
};

function showMovie (age) {

    if (getAge(age) == true) {
        console.log("Showing movie");
    } else {
        console.log("you have no permision")
    };
};

showMovie(17);


function returnMinus(n1, n2) {
    return n1 == n2 ? "'valores iguais'" : n1 < n2 ? n1 : n2;
}

console.log(returnMinus(20, 20))




