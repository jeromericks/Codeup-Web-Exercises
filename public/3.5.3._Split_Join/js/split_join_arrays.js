(function () {
	"use strict";

	var body = document.getElementsByTagName('body')[0];
	var planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

	var planetsAsString = planets.join(' | ');
	console.log(planetsAsString);
	body.innerHTML += "<p>" + planetsAsString + "</p>";

	var planetsAsArray = planetsAsString.split(' | ');
	console.log(planetsAsArray);
	body.innerHTML += "<p>" + planetsAsArray + "</p>";

}());
