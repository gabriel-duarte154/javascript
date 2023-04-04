let user = window.prompt("User:");

if (user != "Admin" && user != null) {
    window.alert("I don't know you")

} else if (user == null) {
    window.alert("Canceled")

} else {
   let password = window.prompt("Password:")

   if (password == "TheMaster") {
        window.alert("Welcome")

   } else if (password == null || password == ""){
    window.alert("Canceled")

   } else {
    wnidow.alert("Wrong password")
   }
}