$(document).ready(function() {
	"use strict";

    // TODO: "Move It" should move the box 100 pixels to the left
    $("#btn-move").click(function() {
        $("#animate-box").animate({
            left: "-=100px"
        }, 500);
    });

    // TODO: "Scale It" should expand the box width by 50%
    $("#btn-scale").click(function() {
        $("#animate-box").animate({
            width: "+=17.4%",
        }, 500);
    });

    // TODO: "Hide It" should use opacity to make the box invisible
    $("#btn-hide").click(function() {
        $("#animate-box").animate({
            opacity: "0"
        }, 500);
    });

    // TODO: "Show It" should make the box appear
    $("#btn-show").click(function() {
        $("#animate-box").animate({
            opacity: "+=1"
        }, 500);
    });

    // TODO: "Animate All" should use an animation stack to:
    //      1) Move and scale the box simultaneously
    //      2) Hide the box
    //      3) Reset the box back to its original position and opacity
    $("#btn-all").click(function() {
        $("#animate-box").animate({
            left: "-=100px",
            width: "+=17.4%"
        }, 1000);
        $("#animate-box").animate({
            opacity: "0"
        }, 1000);
        $("#animate-box").animate({
            opacity: "+=1",
            left: "+=100px",
            width: "-=17.4%"
        }, 1000);

    });


});





