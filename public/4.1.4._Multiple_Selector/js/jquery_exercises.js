(function () {
	"use strict";
	
	$(document).ready(function() {
		$('h1').click()
			function() {
				$(this).css('background-color', 'yellow');	
			}
			function() {
				$(this).css('background-color', 'blue');
			}
		);
	});

}());