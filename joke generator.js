let buttonElement = document.querySelector("#joke");
let jokeText = document.querySelector("#joke-text");

buttonElement.addEventListener("click", showJoke);

function showjoke() {
    jokeText.innerHTML = ""; //Clear previous joke
}