$(document).ready(function() {
	"use strict";


	var body = document.getElementsByTagName('body')[0];
	var konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];
	var user = [];

	var listener = function (event) {
		user.push(event.keyCode);
		console.log(user);
		if (konami.length == user.length) {
			if (konami.toString() == user.toString()) {
				alert("You have added 30 lives!");
			};
		};
	};

	body.addEventListener("keyup", listener, false);
});





