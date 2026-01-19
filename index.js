function showAnswer(response) {
    console.log(response);
}

let apiKey = "4686cad4bte466a10731b6f0be84037o";  // Corrected the variable name
let context = "be polite and provide an answer with";
let prompt = "Who was the first female president?";
let apiUrl = ` https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}` ;  // Changed to backticks

console.log("Processing");
axios.get(apiUrl).then(showAnswer);