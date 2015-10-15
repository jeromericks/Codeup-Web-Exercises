(function () {
	"use strict";
	
	$(document).ready(function() {
		$('h1').click(
			function() {
				$(this).css('background-color', 'yellow');	
			}
		);
		$('p').dblclick(
			function() {
                $(this).css('font-size', '18px');
            }
        );
		$('li').hover(
            function() {
                $(this).css('background-color', 'red');
            },
            function() {
                $(this).css('background-color', 'white');
            }
        );
	});

}());