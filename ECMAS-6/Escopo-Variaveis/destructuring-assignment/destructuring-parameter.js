//Podemos usar destreucturing para passar parametros para uma função

const profile = {
    name: "Gabriel",
    age: 19,
    nationality: "Brasilian",
    location: "Brasil"
};

const profileUpdate = ({name, age, nationality, location}) => {
    console.log(`Name: ${name}
    Age: ${age}
    Nationality: ${nationality}
    Location: ${location}`);
};


profileUpdate(profile);



const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Only change code below this line
    const failureItems = [];
    for (i in arr) {
       failureItems.push(`<li class= "text-warning">${arr[i]}</li>`)
    }
    // Only change code above this line
  
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);

  console.log(failuresList);