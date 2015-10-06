(function () {
	"use strict";

	var body = document.getElementsByTagName('body')[0];
	var names = ["Hello", "Jerome", "Bye", "Ricks"];

	console.log(names.length);
	body.innerHTML += "<p>" + names.length + "</p>";

	console.log('The first name is: ' + names[0]);
	console.log('The second name is: ' + names[1]);
	console.log('The third name is: ' + names[2]);
	console.log('The fourth name is: ' + names[3]);

	body.innerHTML += "<p>The first name is " + names[0] + "</p>";
	body.innerHTML += "<p>The second name is " + names[1] + "</p>";
	body.innerHTML += "<p>The third name is " + names[2] + "</p>";
	body.innerHTML += "<p>The fourth name is " + names[3] + "</p>";
}());
