$(document).ready(function() {
	"use strict";

    // $('ul li:first-child').css('font-weight', 'bold');

    $("ul").each(function(){
    	$(this).find("li").first().css('font-weight', 'bold');
	});

    $('li').click(function(event){
		$(this).parent().toggleClass('invisible');
	});
       

});





