(function () {
	"use strict";


	function alphabet_soup(str) { 
		var string = str.toLowerCase().split(" ").sort();
		return string;  
	}

	console.log(alphabet_soup("Hello World"));

}());
