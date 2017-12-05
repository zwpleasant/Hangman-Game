// function that starts when user types a key
document.onkeyup = function(event) {

	// create an array with list of answers
	var answers = ["Argentina", "Bolivia", "Brazil", "Chile", "Colombia", "Ecuador", "Guyana", "Paraguay", "Peru", "Suriname", "Uruguay", "Venezuela"];

	// randomly select one of the words from the array
	var randomIndex = Math.floor(Math.random() * answers.length);
	var randomChoice = answers[randomIndex];

	console.log(randomChoice);

	// create an array with hidden randomChoice
	var hiddenChoice = [];
	for (var i = 0; i < randomChoice.length; i++) {
		hiddenChoice[i] = "-";
	}

	// use the split method on randomChoice to make it an array of letters
	var randomChoiceSplit = randomChoice.split("")

	console.log(randomChoiceSplit);

	// update DOM
	document.getElementById("gameChoice").innerHTML = hiddenChoice.join(" ");
}
