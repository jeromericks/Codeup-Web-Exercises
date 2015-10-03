(function () {
	"use strict";

	var i = 2;
	var body = document.getElementsByTagName('body')[0];

	while (i <= 65536){
		console.log(i);
		body.innerHTML += "<p>" + i + "</p>";
		i *= 2;
	}
}());
