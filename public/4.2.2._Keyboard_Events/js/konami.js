$(document).ready(function() {
	"use strict";

	var konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];
	var user = [];

	$(document).keyup(function(event){
		user.push(event.keyCode);

		if(user[user.length-1] != konami[user.length-1]) {
			user = [];
		}

		if(user.length == konami.length) {
			alert('You have added 30 Lives!')
		}
	});

});
