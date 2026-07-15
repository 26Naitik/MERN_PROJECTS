const interests = [
    "Doing DSA in Java 💻",
    "Interested in Web Development 🌐",
    "Learning RAG 🤖"
];

const text = document.getElementById("text");
const btn = document.getElementById("btn");

let index = 0;

btn.addEventListener("click", function () {
    text.textContent = interests[index];
    index++;

    if (index === interests.length) {
        index = 0;
    }
});