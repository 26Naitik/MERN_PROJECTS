let quotes = [
    "Believe in yourself.",
    "Never give up.",
    "Success is earned, not given.",
    "Dream big and dare to fail.",
    "Hard work beats talent."
];

let btn = document.getElementById("btn");
let quote = document.getElementById("quote");

btn.onclick = function () {

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = quotes[random];

};