(function () {
	"use strict";

	var random = Math.floor((Math.random()* 15)+ 1);
	var response = prompt('Guess a number between 1 and 15:');
	var guesses = 5;
		while (response != random && guesses > 0) { //noprotect
			if (response == null) {
				break;
			} 
			else if (response < random) {
				response = prompt('Too low. ' + guesses + ' trys left!');
			}
			else if (response > random) {
				response = prompt('Too high. ' + guesses + ' trys left!');
			}

			else {
				response = prompt('Try again! ' + guesses + ' trys left!');
			}
			guesses--;
		}
		if (response == random) {
			alert('Lucky guess!');
		} else {
			alert('You lose!');
		}
	if (confirm("Play again?")) {
  		window.location.reload(true);
  	}

}());