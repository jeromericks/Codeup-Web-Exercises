$(document).ready(function() {
	"use strict";

    $('ul li:first-child').css('font-weight', 'bold');

       
   	$('a').click(function(event) {
        event.preventDefault();
        $('dd').slideToggle('invisible');
    });

    $('h3').on("click", slideDown);
   
    function slideDown(event){
        $(this).next().slideDown();
        $(this).off("click").on("click", slideUp);
    }
    function slideUp(event){
        $(this).next().slideUp();
        $(this).off("click").on("click", slideDown);
    }    

});





