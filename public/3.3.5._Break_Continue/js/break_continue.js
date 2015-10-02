"use strict";

var random = 0;

	while(random % 2 == 0){
		random = Math.floor((Math.random()*50)+1);
	}
console.log("Random odd number to skip is: " + random);
document.write("<p> Random odd number to skip is: " + random + "</p>");

for(var i = 1; i <= 49; i += 2){
	if(i == random){
		console.log("Yikes! Skipping number: " + i);
		document.write("<p> Yikes! Skipping number: " + i + "</p>");
		continue;
	}
	
	console.log("Here is an odd number: " + i);
	document.write("<p> Here is an odd number: " + i + "</p>");
}

