// let newUser = new Object();  // Object construtor
// let user = {
//     name: "Gabriel",
//     age: 19
// };
// let key = "name"
// console.log(user[key])

// function addUser(name, age, isAdmin) {
//     return {
//         name,
//         age,
//         isAdmin,
//     }
// }

// let anotherUser = addUser("eduardo", 19, true);

// console.log(anotherUser);

// for (key in anotherUser) {
//     console.log( key + ":" + " " + anotherUser[key]);
// }


let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

console.log(user);


let empty = {
};

function isEmpty(obj) {
   for (key in obj) {
    return false
   }
   return true;
}
console.log(isEmpty(empty))


function sumAll (obj) {
    let sum = 0;
    for (key in obj) {
        sum += obj[key]
    }
    return sum;
}



let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for (key in obj) {
        if ( typeof obj[key] == "number") {
            obj[key] *= 2
        };
    };
};

multiplyNumeric(menu);


console.log(menu)