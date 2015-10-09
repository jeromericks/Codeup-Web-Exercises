(function () {
	"use strict";


	function alphabet_soup(str) { 
		var string = str.toLowerCase().split(" ").sort().join(" ");
		return string;  
	}

	console.log(alphabet_soup("Hello World"));

}());
