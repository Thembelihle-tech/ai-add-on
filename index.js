function showAnswer(response){
    console.log(response);
}

let apiKay = "4686cad4bte466a10731b6f0be84037o";
let context = "be polite and provide a very short answer";
let prompt = "when was the first AI created?";
let apiUrl = 'https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}';

console.log("Processing");
console.log(apiUrl);