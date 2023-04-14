//Usando a funçaõ Obejct.freeze para impedir que dados sejam mutados

let obj = {
    name: "FreeCodeCamp",
    review: "Awesome"
};
Object.freeze(obj);
obj.review = "bad";
obj.newPro = "test";
console.log(obj);

//Nada foi alterado