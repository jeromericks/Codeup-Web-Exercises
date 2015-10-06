(function () {
	"use strict";

	var body = document.getElementsByTagName('body')[0];
	var planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

	function logPlanets() {
	    console.log('Here is the list of planets:');
	    console.log(planets);
	    body.innerHTML += "<p> Here is the list of planets: </p> <div>[" + planets + "]</div>";
	}
	logPlanets();

	console.log('Adding "The Sun" to the beginning of the planets array.');
	body.innerHTML += "<p> Adding \"The Sun\" to the beginning of the planets array. </p>";
	planets.unshift("Sun");
	logPlanets();

	console.log('Adding "Pluto" to the end of the planets array.');
	body.innerHTML += "<p> Adding \"Pluto\" to the end of the planets array. </p>";
	planets.push("Pluto");
	logPlanets();

	console.log('Removing "The Sun" from the beginning of the planets array.');
	body.innerHTML += "<p> Removing \"The Sun\" from the beginning of the planets array. </p>";
	planets.shift();
	logPlanets();

	console.log('Removing "Pluto" from the end of the planets array.');
	body.innerHTML += "<p> Removing \"Pluto\" from the end of the planets array. </p>";
	planets.pop();
	logPlanets();

	console.log('Finding and logging the index of "Earth" in the planets array.');
	body.innerHTML += "<p> Finding and logging the index of \"Earth\" in the planets array. </p> <p>" + planets.indexOf("Earth") + "</p>";
	console.log(planets.indexOf("Earth"));
	logPlanets();

	console.log('Using splice to remove the planet after Earth.');
	body.innerHTML += "<p> Using splice to remove the planet after Earth. </p>";
	planets.splice(3, 1);
	logPlanets();

	console.log('Using splice to add back the planet after Earth.');
	body.innerHTML += "<p> Using splice to add back the planet after Earth. </p>";
	planets.splice(planets.indexOf("Earth") + 1, 0, "Mars");
	logPlanets();

	console.log('Reversing the order of the planets array.');
	body.innerHTML += "<p> Reversing the order of the planets array. </p>";
	planets.reverse();
	logPlanets();

	console.log('Sorting the planets array.');
	body.innerHTML += "<p> Sorting the planets array. </p>";
	planets.sort();
	logPlanets();


}());
