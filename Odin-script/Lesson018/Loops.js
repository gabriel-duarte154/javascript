let contacts = ["Gabriel:999668641", "Sarah:9855651", "Alberto:11542364"];
let search  = "Gabriel"

for (let i = 0; i < contacts.length; i++) {
    let splitContacts = contacts[i].split(":");
    if (search == splitContacts[0]) {
        console.log(`Contact name: ${splitContacts[0]} number:${splitContacts[1]}`)
        break;
    } else if(i + 1 == contacts.length) {
        console.log(`'${search} not found'`);
    };
};


let num = 10;

function intRaiz(num) {
    for (let i = 1; i <= num; i++) {
        let int_raiz = Math.sqrt(i);
        if (Math.floor(int_raiz) !== int_raiz){
            continue;
        } else {
            console.log(i);
        };
    };
};

intRaiz(num)