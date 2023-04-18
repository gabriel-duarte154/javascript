let criminals = [
    "C",
    "CC",
    "P1P5P4CCCcP2P6P3",
    "P6P2P7P4P5CCCCCP3P1",
    "",
    "P1P2P3",
    "P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3"
];
let reCriminal = /C+/g;
criminals.forEach(criminal => {
    let capture = criminal.match(reCriminal);
    console.log(capture);
})