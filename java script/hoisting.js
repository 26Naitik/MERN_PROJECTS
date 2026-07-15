//hoisting: it means js moves decleration to the top before executing the code.
// !!
//1. variaable declare moves
//2.function declaration moves
//3. initialization does not move

// console.log(a); //hoisting
// var a = 10;
// console.log(a); //10

//internally
// var a;
// console.log(a); //undefined
// a = 10;
//let name
//console.log(name)
//name = "John"
//console.log(name)

// hiBolo();
// function hiBolo(){
//     console.log("hi");
// }

// namaste()
// var namaste = function(){
//     console.log("namaste");
// }
//var -> undefined
//let const -> can noot access before initialization
//function(let& const) -> cannot access before initialization
//function(var)->it is not a function

//object deconstruction

let book = {
    name:"The Alchemist",
    author:"Paulo Coelho",
    year:1988,
}

const bn = book.name;
const ba = book.author;

//object deconstruction

console.log(bn);
console.log(ba);

let {name, author, year} = book;
console.log(name);
console.log(author);
console.log(year);