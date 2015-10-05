(function () {
	"use strict";

	// var random = 0;
	var body = document.getElementsByTagName('body')[0];

	// while(random % 2 === 0){
	// 	random = Math.floor((Math.random()*50)+1);
	// }
	// console.log("Random odd number to skip is: " + random);
	// body.innerHTML +="<p> Random odd number to skip is: " + random + "</p>";

	// for(var i = 1; i <= 49; i += 2){
	// 	if(i == random){
	// 		console.log("Yikes! Skipping number: " + i);
	// 		body.innerHTML += "<p> Yikes! Skipping number: " + i + "</p>";
	// 		continue;
	// 	}

	// 	console.log("Here is an odd number: " + i);
	// 	body.innerHTML += "<p> Here is an odd number: " + i + "</p>";
	// }

	do{
		var random = Math.floor((Math.random()*50)+1);
		if(random % 2 !== 0){
			console.log("Random odd number to skip is: " + random);
			body.innerHTML +="<p> Random odd number to skip is: " + random + "</p>";
			break;
		}

		console.log(random + ' was even. Generating a new random number.');
	} while (random % 2 === 0);

	for(var i = 1; i <= 49; i += 2){
		if(i == random){
			console.log("Yikes! Skipping number: " + i);
			body.innerHTML += "<p> Yikes! Skipping number: " + i + "</p>";
			continue;
		}
		console.log(i);
		body.innerHTML += "<p> Here is an odd number: " + i + "</p>";
	}
}());
