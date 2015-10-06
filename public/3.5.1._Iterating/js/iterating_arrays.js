(function () {
	"use strict";

	var body = document.getElementsByTagName('body')[0];
	var names = ["Hello", "Jerome", "Bye", "Ricks"];

	console.log(names.length);
	body.innerHTML += "<p>" + names.length + "</p>";

	for(var i = 0; i < names.length; i++) {
		console.log("The name at index " + i + " is " + names[i]);
		body.innerHTML += "<p>The name at index " + i + " is " + names[i] + "</p>";
	}

	names.forEach(function (element, index, array) {
    	console.log('The name at index ' + index + ' is: ' + element);
    	body.innerHTML += "<p>The name at index " + index + " is " + element + "</p>";
	});


}());
