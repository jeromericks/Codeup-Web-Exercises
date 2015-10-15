$(document).ready(function() {
	"use strict";

    $('ul li:first-child').css('font-weight', 'bold');

    $('ul').on('click', 'li', function(event) {
    	event.preventDefault();
        $('li').parent().addClass('invisible');
    });
       

});





