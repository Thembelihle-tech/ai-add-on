let buttonElement = document.querySelector("#joke");
let jokeText = document.querySelector("#joke-text");

let jokes = [
    {
        question: "Why do French people eat snails?",
        answer: "Because they don't like fast food 🐌😂",
    },
    {
        question: "Why don't programmers like nature?",
        answer: "Too many bugs 🐛😂",
    },
    {
        question: "Why did the scarecrow win an award?",
        answer: "Because he was outstanding in his field 🌾😂",
    },
    {
        question: "Why did the math book look sad?",
        answer: "Because it had too many problems 📘😂"
    }
]

buttonElement.addEventListener("click", showJoke);

