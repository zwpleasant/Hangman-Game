var answers = ["Argentina", "Bolivia", "Brazil", "Chile", "Colombia", "Ecuador", "Guyana", "Paraguay", "Peru", "Suriname", "Uruguay", "Venezuela"];

var randomIndex = Math.floor(Math.random() * answers.length);
var randomChoice = answers[randomIndex];

console.log(randomChoice);

for (i = 0; i < randomChoice.length; i++) { 
    console.log(randomChoice[i]);
}

document.getElementById("gameChoice").innerHTML = randomChoice;