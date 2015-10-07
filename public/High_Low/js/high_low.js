(function () {
	"use strict";

	// var random = Math.floor((Math.random()* 15)+ 1);
	// var response = prompt('Guess a number between 1 and 15:');
	// var guesses = 5;
	// 	while (response != random && guesses > 0) { //noprotect
	// 		if (response == null) {
	// 			break;
	// 		} 
	// 		else if (response < random) {
	// 			response = prompt('Too low. ' + guesses + ' trys left!');
	// 		}
	// 		else if (response > random) {
	// 			response = prompt('Too high. ' + guesses + ' trys left!');
	// 		}

	// 		else {
	// 			response = prompt('Try again! ' + guesses + ' trys left!');
	// 		}
	// 		guesses--;
	// 	}
	// 	if (response == random) {
	// 		alert('Lucky guess!');
	// 	} else {
	// 		alert('You lose!');
	// 	}
	// if (confirm("Play again?")) {
 //  		window.location.reload(true);
 //  	}

 	function getRandomNumber() {
 		return Math.floor((Math.random()* 15) +1);
 	}

 	function playAgain() {
 		return confirm('Do you want to play again?');
 	}

 	function getGuess() {
 		return prompt('Guess a number between 1 and 15:');
 	}

 	function isValidGuess(guess) {
 		 var parsedGuess = parseInt(guess);

 		 if(isNaN(parsedGuess)) {
 		 	return false;
 		 } else {
 		 	return true;
 		 }
 	}

 	function getValidGuess(){
	 	do {
	 		var guess = getGuess();

	 	} while (isValidGuess(guess) === false);

	 	return guess;
 	}

 	function playGame() {
	 	var random = getRandomNumber();
	 	console.log(random);

	 	var i = 0;
	 	do {
		 	var guess = getValidGuess();

		 	if(guess == random) {
		 		alert('You did it');
		 	} else if (guess > random) {
		 		alert('Too High.');
		 	} else if (guess < random) 
		 		alert('Too low.');	
	 		
		 	i++;

	 	} while (random !== guess && i < 5);

 	} 


 	do {
	 	playGame();

	 	var replay = playAgain();
 	} while (replay);


 	

}());

