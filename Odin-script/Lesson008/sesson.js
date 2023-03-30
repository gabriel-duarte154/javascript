let month = new Date().getMonth();

switch (month) {
    case 11:
    case 0:
    case 1:
        console.log("É verâo, hora de aproveitar as férias e tomar sorvete;");
        break;
    case 2:
    case 3:
    case 4:
        console.log("É outono, e ainda vem os ventos.");
        break;
    case 5:
    case 6:
    case 7:
        console.log("É inverno, como tá frio.");
        break;
    case 8:
    case 9:
    case 10:
        console.log("É primavera, as flores começaram a desabrochar.");
        break;
    default:
        console.log("Something went wrong, how it's possible.");
        break;
}