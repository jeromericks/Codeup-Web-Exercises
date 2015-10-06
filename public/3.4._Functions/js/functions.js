(function () {
	"use strict";

	var myNameIs = 'Jerome';
	var body = document.getElementsByTagName('body')[0];

	function sayHello(fname) {
		console.log("Hello " + fname);
		body.innerHTML += "<p> Hello " + fname + "</p>";
	}
	sayHello(myNameIs);

	var random = Math.floor((Math.random()*100)+1);

	function isOdd(number) {
		console.log((number % 2 == 1) ? random + " is an odd number!" : random + " is an even number!");
		body.innerHTML += (number % 2 == 1) ? "<p>" + random + " is an odd number! </p>" : "<p>" + random + " is an even number! </p>";
	}
	isOdd(random);

	// function random(min, max) {
	// 	return Math.floor((Math.random()* max - min) + min);
	// }

	// console.log(random(5, 20));
}());
