(function () {
	"use strict";

	var body = document.getElementsByTagName('body')[0];

	for(var i = 100; i >= 5; i -= 5){
		body.innerHTML += "<p>" + i + "</p>";
		console.log(i);
	}
}());