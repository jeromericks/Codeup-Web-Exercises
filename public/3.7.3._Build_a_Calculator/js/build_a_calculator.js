(function () {
	"use strict";

	document.getElementById('clear').addEventListener('click', clear, false);
	function clear(){
		document.getElementById('text1').innerHTML = "0";
		document.getElementById('text3').innerHTML = "0";
	}

}());
