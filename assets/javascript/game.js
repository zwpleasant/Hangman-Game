// create an array with list of answers
var answers = ["Argentina", "Bolivia", "Brazil", "Chile", "Colombia", "Ecuador", "Guyana", "Paraguay", "Peru", "Suriname", "Uruguay", "Venezuela"];

// randomly select one of the words from the array
var randomIndex = Math.floor(Math.random() * answers.length);
var randomChoice = answers[randomIndex];

console.log(randomChoice);

// use split method to separate randomChoice to letters
var randomChoiceSplit = randomChoice.split("");

console.log(randomChoiceSplit);

// convert the randomly selected word to -- form

// update DOM with the word
document.getElementById("gameChoice").innerHTML = randomChoice;