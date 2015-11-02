$(document).ready(function() {
	"use strict";

	
	$('.pause').click(function() {
		var $this = $(this);
	    $('header').css('background', 'url(/1.4.5._Twitter_Bootstrap/background2.jpg) no-repeat center center');
	    $('header').css('background-size', 'cover');
	    $('header').css('-webkit-background-size', 'cover');
	    $('header').css('-moz-background-size', 'cover');
		$('header').css('-o-background-size', 'cover');

		if($this.hasClass('pause')) {
			$this.removeClass('pause').addClass('play');
		}

		if($this.hasClass('play')) {
			$('.play').html('<i class="fa fa-fw fa-play"></i>');
		}
	});

	$('.play').click(function() {
		var $this = $(this);
		console.log($this);
		$('header').css('background', 'url(/1.4.5._Twitter_Bootstrap/background.gif) no-repeat center center');
	    $('header').css('background-size', 'cover');
	    $('header').css('-webkit-background-size', 'cover');
	    $('header').css('-moz-background-size', 'cover');
		$('header').css('-o-background-size', 'cover');
		if($this.hasClass('play')) {
			$this.removeClass('play').addClass('pause');
		}

		if($this.hasClass('pause')) {
			$('.pause').html('<i class="fa fa-fw fa-pause"></i>');
		}
	});

});