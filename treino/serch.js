const getTheTitles = function(books) {
    let titles = [];
    books.forEach(element => {
        titles.push(element["title"])
    });

    return titles;
};



let book = [
    {
        title: "book1",
        author: "rob"
    },
    {
        title: "book2",
        author: "steve"
    }
];

console.log(getTheTitles(book))