let hello = "  Hello, World!  ";
let wsRegex = /^(\s*)|(\s*)$/g;
let result = hello.replace(wsRegex, "" );
console.log(hello.length)
console.log(result.length)