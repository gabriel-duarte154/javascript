let day = new Date().getDay();

switch (day) {
    case 0:
        console.log("It's sunday, take a time to relax.");
        break;
    case 1:
        console.log("It's monday, time to go back to week.");
        break;
    case 2: 
        console.log("It's tuesday, calm down the week just started.");
        break;
    case 3:
        console.log("It's the middle of the week.");
        break;
    case 4:
        console.log("Almost the weekend.");
        break;
    case 5:
        console.log("It's friday.");
        break;
    case 6:
        console.log("UH! Alredy saturday.");
        break;
    default:
        console.log("Something went wrong, this is bad.");
        break;
}