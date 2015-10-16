$(document).ready(function() {
	"use strict";

    $('ul li:first-child').css('font-weight', 'bold');

       
   	$('a').click(function(event) {
        event.preventDefault();
        $('dd').fadeToggle('invisible');
    });

    $('h3').on("click", fadeOut);
   
    function fadeOut(event){
        $(this).next().fadeOut();
        $(this).off("click").on("click", fadeIn);
    }
    function fadeIn(event){
        $(this).next().fadeIn();
        $(this).off("click").on("click", fadeOut);
    }    

});





